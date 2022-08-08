import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, switchMap, scheduled, asyncScheduler, map } from 'rxjs';
import { User } from '../../models/user.model';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../../environments/environment';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private settings: firebase.auth.ActionCodeSettings = {
    url: environment.production ? 'https://workclick.daniromo.me' : 'http://localhost:4200',
    handleCodeInApp: true,
    android: {
      packageName: 'me.daniromo.workclick'
    },
    dynamicLinkDomain: 'localhost'
  }

  public user$: Observable<User | undefined>
  public loggedIn$: Observable<boolean>

  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router,
    private toast: MatSnackBar
  ) {
    this.user$ = this.auth.authState.pipe(
      switchMap(user => {
        if (!user) return scheduled(Promise.resolve(undefined), asyncScheduler)
        return this.firestore.doc<User>(`users/${user.uid}`).valueChanges()
      })
    )
    this.loggedIn$ = this.user$.pipe(map(u => !!u))
  }

  public async loginWithEmail(url: string, email: string): Promise<void> {
    if (!email) return
    if (await this.auth.isSignInWithEmailLink(url)) {
      const credential = await this.auth.signInWithEmailLink(email, url)
      localStorage.removeItem('signInEmail')
      if (credential.user) await this.updateUserData(this.convertUser(credential.user))
      this.router.navigateByUrl('dashboard')
    } else {
      this.toast.open('Se ha enviado a tu correo un enlace con tu acceso temporal 📧', 'OK', { duration: 3000 })
      localStorage.setItem('signInEmail', email)
      await this.auth.sendSignInLinkToEmail(email, this.settings)
    }
  }

  public async loginWithGoogle() {
    const user = await GoogleAuth.signIn()
    const oauth = firebase.auth.GoogleAuthProvider.credential(user.authentication.idToken)
    const credential = await this.auth.signInWithCredential(oauth)
    if (credential.additionalUserInfo?.profile && credential.user) {
      const profile = credential.additionalUserInfo.profile as any
      this.updateUserData({
        uid: credential.user.uid,
        name: profile.name,
        photo: profile.picture,
        email: profile.email
      })
    }
    if (this.router.url === '/mobile') this.router.navigateByUrl('/mobile/cv')
    else this.router.navigateByUrl('dashboard')
  }

  public async logout() {
    this.auth.signOut()
    this.router.navigateByUrl('')
  }

  public async updateUserData(user: User): Promise<void> {
    const userRef: AngularFirestoreDocument<User> = this.firestore.doc(`users/${user.uid}`)
    await userRef.set(user, { merge: true })
  }

  private convertUser(user: firebase.User): User {
    return {
      uid: user.uid,
      name: user.displayName || '',
      email: user.email || '',
      photo: user.photoURL || ''
    }
  }

}

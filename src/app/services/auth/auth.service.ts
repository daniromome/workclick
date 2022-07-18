import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, switchMap, scheduled, asyncScheduler } from 'rxjs';
import { User } from '../../models/user.model';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private settings: firebase.auth.ActionCodeSettings = {
    url: environment.production ? 'https://workclick.daniromo.me' : 'http://localhost:4200',
    handleCodeInApp: true,
    android: {
      packageName: 'me.daniromo.workclick'
    }
  }

  public user$: Observable<User | undefined>

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
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.auth.signInWithPopup(provider);
    console.log(credential)
    if (credential.additionalUserInfo?.profile) await this.updateUserData(this.convertUser(credential.additionalUserInfo?.profile as unknown as firebase.User))
    console.log('authenticated', credential.user?.email)
    this.router.navigateByUrl('dashboard')
  }

  private async updateUserData(user: User): Promise<void> {
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

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, of, switchMap } from 'rxjs';
import { User } from '../../models/user.model';
import firebase from 'firebase/compat';
import { Store } from '@ngrx/store';
import { AuthActions } from './action-types';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private settings: firebase.auth.ActionCodeSettings = {
    url: 'https://workclick.daniromo.me/welcome',
    handleCodeInApp: true,
    android: {
      packageName: 'me.daniromo.workclick'
    },
    dynamicLinkDomain: 'workclick.daniromo.me'
  }

  public user$: Observable<User | undefined>

  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private store: Store
  ) {
    this.user$ = this.auth.authState.pipe(
      switchMap(user => {
        if (!user) return of(undefined)
        return this.firestore.doc<User>(`users/${user.uid}`).valueChanges()
      })
    )
  }

  public async loginWithEmail(email: string): Promise<void> {
    await this.auth.sendSignInLinkToEmail(email, this.settings)
    localStorage.setItem('signInEmail', email)
  }

  public async loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.auth.signInWithPopup(provider);
    if (!credential.user) return
    const user = this.convertUser(credential.user)
    this.updateUserData(user)
    this.store.dispatch(AuthActions.login())
  }

  public async loggedInWithEmail(url: string): Promise<void> {
    await this.auth.isSignInWithEmailLink(url)
    const email = localStorage.getItem('signInEmail')
    if (!email) return
    const credential = await this.auth.signInWithEmailLink(email, url)
    if (credential.user) this.updateUserData(this.convertUser(credential.user))
  }

  private updateUserData(user: User): void {
    const userRef: AngularFirestoreDocument<User> = this.firestore.doc(`users/${user.uid}`)
    userRef.set(user, { merge: true })
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

import firebase from 'firebase/compat';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    public readonly auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
  }

  async login() {
    const user = await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

}

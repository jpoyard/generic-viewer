import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Logger } from 'angular2-logger/core';

@Injectable()
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private log: Logger
  ) { }

  signIn() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => {
        this.log.log(res);
        console.log(res);
      } );
  }

  signOut() {
    this.afAuth.auth.signOut();
  }
}

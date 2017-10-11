import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

import { AngularFireAuth } from 'angularfire2/auth';
import { User, auth } from 'firebase/app';

import { Logger } from 'angular2-logger/core';

export { User } from 'firebase/app';

@Injectable()
export class AuthService {
  private _isLoggedIn = false;
  private _redirectUrl: string;

  constructor(
    private afAuth: AngularFireAuth,
    private log: Logger,
    private router: Router
  ) { }

  get authState(): Observable<User> {
    return this.afAuth.authState;
  }

  signIn(): void {
    this.log.info('login:start');
    this.afAuth.auth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then(res => {
        this.log.info('login:succeed', res);
        this._isLoggedIn = true;
        if (this._redirectUrl) {
          this.router.navigate([this._redirectUrl]);
          this._redirectUrl = undefined;
        }
      },
      error => {
        this.log.error('login:error', error);
        this._isLoggedIn = false;
      })
      .catch(error => {
        this.log.error('login:catch', error);
        this._isLoggedIn = false;
      });
  }

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  set redirectUrl(url: string) {
    this.log.info(`redirectUrl=${url}`);
    this._redirectUrl = url;
  }

  get redirectUrl(): string {
    return this._redirectUrl;
  }

  signOut(): void {
    this.log.info('logout:start');
    this.afAuth.auth.signOut()
      .then((resolve) => {
        this.log.info('logout:succeed');
        this._isLoggedIn = false;
      },
      error => {
        this.log.error('logout:error', error);
      })
      .catch(error => {
        this.log.error('logout:catch', error);
      });
  }
}

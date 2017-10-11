import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';

import { AngularFireAuth } from 'angularfire2/auth';
import { Logger } from 'angular2-logger/core';
import { Router } from '@angular/router';

const fakeFirebase = {
  app: {},
  auth: {
    signInWithPopup: (provider: any) => { },
    signOut: () => { }
  },
  authState: {}
};

const fakeRouter = {
}

describe('AuthService', () => {
  let service: AuthService;

  it('should be created', () => {
    service = new AuthService(fakeFirebase as AngularFireAuth, new Logger(), fakeRouter as Router);
    expect(service).toBeTruthy();
  });
});

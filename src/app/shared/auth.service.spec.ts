import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';

import { AngularFireAuth } from 'angularfire2/auth';
import { Logger } from 'angular2-logger/core';

const fake = {
  app: {},
  auth: {
    signInWithPopup: (provider: any) => {},
    signOut: () => {}
  },
  authState: {}
};

describe('AuthService', () => {
  let service: AuthService;

  it('should be created', () => {
    service = new AuthService(fake as AngularFireAuth, new Logger());
    expect(service).toBeTruthy();
  });
});

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Logger } from 'angular2-logger/core';

import { CounterService } from './counter.service';
import { AuthService } from './auth.service';


export const firebaseConfig = {
  apiKey: 'AIzaSyA6fKrhz9U-b6T-RtUCo3JxA3PsrMG24DI',
  authDomain: 'genericviewer-aeee9.firebaseapp.com',
  databaseURL: 'https://genericviewer-aeee9.firebaseio.com',
  projectId: 'genericviewer-aeee9',
  storageBucket: 'genericviewer-aeee9.appspot.com',
  messagingSenderId: '69297115546'
};

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: [],
  providers: [CounterService, AuthService, Logger]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [CounterService, AuthService]
    };
  }
}

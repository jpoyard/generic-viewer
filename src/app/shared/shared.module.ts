import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Logger } from 'angular2-logger/core';
import { environment } from '../../environments/environment';

import { CanActivateViaAuthGuard } from './auth.guard';
import { CounterService } from './counter.service';
import { AuthService } from './auth.service';


@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase, 'generic-viewer'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: [
  ],
  providers: [CounterService, AuthService, Logger, CanActivateViaAuthGuard]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [CounterService, AuthService]
    };
  }
}

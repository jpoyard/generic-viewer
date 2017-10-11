import { Component } from '@angular/core';
import { appVersion, Version } from './version';
import { AuthService } from 'app/shared/auth.service';

@Component({
  selector: 'gv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public version: Version;
  title = 'Generic viewer';
  constructor(
    public authService: AuthService
  ) {
    this.version = appVersion;
  }
}

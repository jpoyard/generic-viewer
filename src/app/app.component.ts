import { Component } from '@angular/core';
import { appVersion, Version } from './version';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public version: Version;
  title = 'app';
  constructor() {
    this.version = appVersion;
  }
}

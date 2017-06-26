import { Component } from '@angular/core';
import { appVersion, Version } from './version';

@Component({
  selector: 'gv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public version: Version;
  title = 'Generic viewer';
  constructor() {
    this.version = appVersion;
  }
}

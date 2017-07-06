import { Component, ElementRef, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm, NgModel } from '@angular/forms';
import { appVersion, Version } from './version';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { URLSearchParams } from '@angular/http';

@Component({
  selector: 'gv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedTheme: string;
  public themeCSSFile: SafeResourceUrl;
  public themes = [
    { value: 'theme-0', viewValue: 'Theme #0' },
    { value: 'theme-1', viewValue: 'Theme #1' },
    { value: 'theme-2', viewValue: 'Theme #2' }
  ];
  public version: Version;
  title = 'Generic viewer';
  constructor(private sanitizer: DomSanitizer, private location: Location) {
    this.version = appVersion;
  }

  ngOnInit() {
    const path = this.location.path(false);
    const params = new URLSearchParams(path.substring(path.indexOf('?') + 1));
    this.selectedTheme = params.get('theme') ? params.get('theme') : 'theme-0';
    this.themeCSSFile = this.sanitizer.bypassSecurityTrustResourceUrl(`themes/${this.selectedTheme}.css`);
  }

  get themeClass(): string {
    return this.selectedTheme;
  }
}

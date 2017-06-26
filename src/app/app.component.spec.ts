import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '@angular/material'

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the Generic viewer app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Generic viewer'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Generic viewer');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Generic viewer !!');
  }));

  it('should render link in an ul tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const expected = ['Tour of Heroes', 'CLI Documentation', 'Angular blog'];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const ulElement = compiled.querySelector('ul');
    const liElements =  ulElement.querySelectorAll('li');
    liElements.forEach((element, index) => {
      expect(element.textContent).toContain(expected[index]);
    });

  }));
});

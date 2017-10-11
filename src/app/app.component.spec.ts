import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MdIconModule } from '@angular/material';

import { AuthService } from './shared/auth.service';
import { AppComponent } from './app.component';

class AuthServiceSpy {
  signIn() { }
  signOut() { }
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let authService: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MdIconModule
      ],
      declarations: [
        AppComponent
      ],
    })
    .overrideComponent(AppComponent, {
      set: {
        providers: [
          { provide: AuthService, useClass: AuthServiceSpy }
        ]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();

    authService = fixture.debugElement.injector.get(AuthService);
  });

  it('should create the Generic viewer app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'Generic viewer'`, async(() => {
    expect(component.title).toEqual('Generic viewer');
  }));

  it('should render title in a h1 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Generic viewer !!');
  }));

  it('should render link in an ul tag', async(() => {
    const expected = ['Tour of Heroes', 'CLI Documentation', 'Angular blog'];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const ulElement = compiled.querySelector('ul');
    const liElements = ulElement.querySelectorAll('li');
    liElements.forEach((element, index) => {
      expect(element.textContent).toContain(expected[index]);
    });
  }));
});

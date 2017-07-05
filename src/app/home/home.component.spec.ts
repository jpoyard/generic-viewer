import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { AuthService } from '../shared/auth.service';
import { CounterService } from '../shared/counter.service';

class AuthServiceSpy {
  signIn() {}
  signOut() {}
}

class CounterServiceSpy {
  public counter = 0;
  decrease() {
    this.counter -= 1;
  }
  increase() {
    this.counter += 1;
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let authService: AuthService;
  let counterService: CounterService;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    })
      .overrideComponent(HomeComponent, {
        set: {
          providers: [
            { provide: AuthService, useClass: AuthServiceSpy },
            { provide: CounterService, useClass: CounterServiceSpy }
          ]
        }
      })

      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    authService = fixture.debugElement.injector.get(AuthService);
    counterService = fixture.debugElement.injector.get(CounterService);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

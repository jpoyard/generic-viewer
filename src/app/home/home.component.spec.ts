import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CounterService } from '../shared/counter.service';

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
  let counterService: CounterService;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    })
      .overrideComponent(HomeComponent, {
        set: {
          providers: [
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

    counterService = fixture.debugElement.injector.get(CounterService);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

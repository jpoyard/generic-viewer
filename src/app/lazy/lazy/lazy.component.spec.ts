import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyComponent } from './lazy.component';
import { CounterService } from 'app/shared/counter.service';

class CounterServiceSpy {
  public counter = 0;
  decrease() {
    this.counter -= 1;
  }
  increase() {
    this.counter += 1;
  }
}

describe('LazyComponent', () => {
  let component: LazyComponent;
  let fixture: ComponentFixture<LazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LazyComponent]
    })

      .overrideComponent(LazyComponent, {
        set: {
          providers: [
            { provide: CounterService, useClass: CounterServiceSpy }
          ]
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LazyPageComponent } from './lazy-page.component';

describe('LazyPageComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        LazyPageComponent
      ]
    })
      .compileComponents();
  }));

  it('should be created', async(() => {
    const fixture = TestBed.createComponent(LazyPageComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { CounterService } from './counter.service';

describe('CounterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CounterService]
    });
  });

  it('should be created', inject([CounterService], (service: CounterService) => {
    expect(service).toBeTruthy();
  }));

  it('should increase counter value', inject([CounterService], (service: CounterService) => {
    // Given
    let expected = 0;
    expect(service.counter).toBe(expected);
    // When
    service.increase();
    // Then
    expected += 1;
    expect(service.counter).toBe(expected);
  }));


  it('should decrease counter value', inject([CounterService], (service: CounterService) => {
    // Given
    let expected = 0;
    expect(service.counter).toBe(expected);
    // When
    service.decrease();
    // Then
    expected -= 1;
    expect(service.counter).toBe(expected);
  }));
});

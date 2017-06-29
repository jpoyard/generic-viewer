import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  public counter: number;

  constructor() {
    this.counter = 0;
  }

  decrease() {
    this.counter -= 1;
  }

  increase() {
    this.counter += 1;
  }

}

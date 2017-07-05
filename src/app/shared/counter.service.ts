import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  public _counter: number;

  constructor() {
    this._counter = 0;
  }

  decrease() {
    this._counter -= 1;
  }

  increase() {
    this._counter += 1;
  }

  get counter(): number {
    return this._counter;
  }

}

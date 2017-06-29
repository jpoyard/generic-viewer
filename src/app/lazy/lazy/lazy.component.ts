import { Component, OnInit } from '@angular/core';
import { CounterService } from 'app/shared/counter.service';

@Component({
  selector: 'gv-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent implements OnInit {

  constructor(public counterService: CounterService) { }

  ngOnInit() {
  }

}

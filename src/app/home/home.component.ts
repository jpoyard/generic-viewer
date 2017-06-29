import { Component, OnInit } from '@angular/core';
import { CounterService } from 'app/shared/counter.service';

@Component({
  selector: 'gv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public counterService: CounterService) { }

  ngOnInit() {
  }

}

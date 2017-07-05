import { Component, OnInit } from '@angular/core';
import { CounterService } from 'app/shared/counter.service';
import { AuthService } from 'app/shared/auth.service';

@Component({
  selector: 'gv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public counterService: CounterService,
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

}

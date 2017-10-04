import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyPageComponent } from './lazy-page/lazy-page.component';
import { LazyComponent } from './lazy/lazy.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    LazyRoutingModule
  ],
  declarations: [LazyPageComponent, LazyComponent]
})
export class LazyModule { }

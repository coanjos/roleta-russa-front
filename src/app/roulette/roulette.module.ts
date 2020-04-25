import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouletteRoutingModule } from './roulette-routing.module';
import { RouletteHomeComponent } from './roulette-home/roulette-home.component';


@NgModule({
  declarations: [RouletteHomeComponent],
  imports: [
    CommonModule,
    RouletteRoutingModule
  ]
})
export class RouletteModule { }

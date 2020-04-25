import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouletteHomeComponent } from './roulette-home/roulette-home.component';

const routes: Routes = [
  {
    path: '', component: RouletteHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouletteRoutingModule { }

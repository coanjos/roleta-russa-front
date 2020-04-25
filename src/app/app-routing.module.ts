import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { 
    path: 'roulette',
    loadChildren: () => import('./roulette/roulette.module')
      .then(m => m.RouletteModule)
  },
  { 
    path: 'stars',
    loadChildren: () => import('./stars/stars.module')
      .then(m => m.StarsModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule)
  },
  {
    path: '',
    loadChildren: () => import('./roulette/roulette.module')
      .then(m => m.RouletteModule)
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarsHomeComponent } from './stars-home/stars-home.component';
import { CreateComponent } from './create/create.component';
import { PatchComponent } from './patch/patch.component';
import { AuthGuard } from '../guards/auth.guard';


const routes: Routes = [
  {
    path: '', component: StarsHomeComponent
  },
  {
    path: 'new', component: CreateComponent, canActivate: [AuthGuard]
  },
  {
    path: 'patch/:id', component: PatchComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarsRoutingModule { }

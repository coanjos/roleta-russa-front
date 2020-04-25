import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StarsRoutingModule } from './stars-routing.module';
import { StarsHomeComponent } from './stars-home/stars-home.component';
import { CreateComponent } from './create/create.component';
import { PatchComponent } from './patch/patch.component';


@NgModule({
  declarations: [StarsHomeComponent, CreateComponent, PatchComponent],
  imports: [
    CommonModule,
    StarsRoutingModule,
    ReactiveFormsModule
  ]
})
export class StarsModule { }

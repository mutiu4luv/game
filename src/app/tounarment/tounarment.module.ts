import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TounarmentRoutingModule } from './tounarment-routing.module';
import { TounarmentComponent } from './tounarment.component';
import { CreateTounarmentComponent } from './create-tounarment/create-tounarment.component';


@NgModule({
  declarations: [
    TounarmentComponent,
    CreateTounarmentComponent
  ],
  imports: [
    CommonModule,
    TounarmentRoutingModule
  ]
})
export class TounarmentModule { }

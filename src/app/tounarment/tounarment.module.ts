import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TounarmentRoutingModule } from './tounarment-routing.module';
import { TounarmentComponent } from './tounarment.component';
import { CongratulationsComponent } from './congratulations/congratulations.component';
import { SingleTounarmentComponent } from './single-tounarment/single-tounarment.component';
// import { CreateTounarmentComponent } from './create-tounarment/create-tounarment.component';

@NgModule({
  declarations: [TounarmentComponent, CongratulationsComponent, SingleTounarmentComponent],
  imports: [CommonModule, TounarmentRoutingModule],
})
export class TounarmentModule {}

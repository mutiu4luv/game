import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CreateTounarmentRoutingModule } from './create-tounarment-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTounarmentComponent } from './create-tounarment.component';

@NgModule({
  declarations: [CreateTounarmentComponent],
  imports: [
    CommonModule,
    CreateTounarmentRoutingModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CreateTounarmentModule {}

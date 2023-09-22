import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CreateTounarmentRoutingModule } from './create-tounarment-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CreateTounarmentRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
  ],
})
export class CreateTounarmentModule {}

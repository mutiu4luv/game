import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutpageRoutingModule } from './aboutpage-routing.module';
import { AboutpageComponent } from './aboutpage.component';


@NgModule({
  declarations: [
    AboutpageComponent
  ],
  imports: [
    CommonModule,
    AboutpageRoutingModule
  ]
})
export class AboutpageModule { }

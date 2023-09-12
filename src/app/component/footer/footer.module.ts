import { SharedModule } from './../../sharedmodule/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, FooterRoutingModule, SharedModule],
})
export class FooterModule {}

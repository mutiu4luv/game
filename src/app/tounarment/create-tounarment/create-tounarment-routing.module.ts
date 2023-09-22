import { CreateTounarmentModule } from './create-tounarment.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTounarmentComponent } from './create-tounarment.component';

const routes: Routes = [
  {
    path: '',
    component: CreateTounarmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateTounarmentRoutingModule {}

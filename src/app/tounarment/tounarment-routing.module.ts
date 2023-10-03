import { SingleTounarmentModule } from './single-tounarment/single-tounarment.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TounarmentComponent } from './tounarment.component';

const routes: Routes = [
  {
    path: '',
    component: TounarmentComponent,
    children: [
      {
        path: 'create-tournament',
        loadChildren: () =>
          import('./create-tounarment/create-tounarment.module').then(
            (m) => m.CreateTounarmentModule
          ),
      },
      {
        path: 'single-tournament',
        loadChildren: () =>
          import('./single-tounarment/single-tounarment.module').then(
            (m) => m.SingleTounarmentModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TounarmentRoutingModule {}

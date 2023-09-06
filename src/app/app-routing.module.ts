import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HompageComponent } from './component/hompage/hompage.component';

const routes: Routes = [
  {
    path: '',
    component: HompageComponent,
  },
  {
    path: 'aboutpage',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

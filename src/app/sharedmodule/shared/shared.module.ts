import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from 'src/app/component/loader/loader.component';

const component = [LoaderComponent];
const module = [CommonModule];

@NgModule({
  declarations: [...component],
  imports: [...module],
  exports: [...component, ...module],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynaLoaderRoutingModule } from './dyna-loader-routing.module';
import { DynaLoaderComponent } from './dyna-loader.component';


@NgModule({
  declarations: [DynaLoaderComponent],
  imports: [
    CommonModule,
    DynaLoaderRoutingModule
  ]
})
export class DynaLoaderModule { }

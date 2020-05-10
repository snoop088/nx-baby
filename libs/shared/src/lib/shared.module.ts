import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { API, apiConfig } from './api/api-config';
import { DynaLoaderComponent } from './dyna-loader/dyna-loader.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [{
    provide: API,
    useValue: apiConfig
  }],
  exports: [
    DynaLoaderComponent
  ],
  declarations: [DynaLoaderComponent]
})
export class SharedModule {}

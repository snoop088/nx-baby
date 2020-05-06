import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { API, apiConfig } from './api/api-config';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [{
    provide: API,
    useValue: apiConfig
  }]
})
export class SharedModule {}

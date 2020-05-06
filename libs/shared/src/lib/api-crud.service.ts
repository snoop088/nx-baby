import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiCrudBase } from './api-crud-base';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiCrudService<T> extends ApiCrudBase<T> {
  protected _apiUrl;

  constructor(protected http: HttpClient) {
    super(http);
  }
  
}

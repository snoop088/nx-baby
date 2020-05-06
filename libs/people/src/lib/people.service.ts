import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiCrudService, API } from '@se/shared';
import { Api } from '@se/shared';

@Injectable({
  providedIn: 'root'
})
export class PeopleService<T> extends ApiCrudService<T> {
  constructor(protected http: HttpClient, @Inject(API) private api: Api) {
    super(http);
    this._apiUrl = api;
  }

}

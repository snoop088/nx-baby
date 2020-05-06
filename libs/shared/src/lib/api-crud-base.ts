import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators'
import { Api } from './api/api-config';

export abstract class ApiCrudBase<T> {
    protected abstract _apiUrl: Api;
    constructor(protected http: HttpClient) {}
    
    public getItems(): Observable<T[]> {
        return this.http.get<T[]>(this._apiUrl.getItems).pipe(
            map(resp => resp),
            catchError(er => of(null))
        )
    }
}

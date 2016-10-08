import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {
  
  baseApiUrl: string = '';

  constructor(private http: Http) {}

  post(servicePath: string, body: Object): Observable<Object> {
    return this.http.post(`${this.baseApiUrl}${servicePath}`, body);
  }
}

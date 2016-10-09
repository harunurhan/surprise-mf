import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {
  
  baseApiUrl: string = 'https://deb70268.ngrok.io/';

  constructor(private http: Http) {}

  post(servicePath: string, body: Object): Observable<Array<Object>> {
    return this.http.post(`${this.baseApiUrl}${servicePath}`, body)
      .map(res => res.json().data);
  }
}

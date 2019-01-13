import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {serverurl} from '../../../confing/urlconfig';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  host = serverurl;
  headers: any =  new Headers({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }
  httpget(path) {
     const respocnceurl: string = this.host + path;
     return this.http.get(respocnceurl, this.headers);
  }
}

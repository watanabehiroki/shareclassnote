import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {geturl} from '../../../confing/urlconfig';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  host = geturl();
  headers: any =  new Headers({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }
  httpget(path) {
     var respocnceurl: string = this.host + path;
     return this.http.get(respocnceurl, this.headers);
  }
}

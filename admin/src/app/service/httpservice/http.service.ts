import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {serverurl} from '../../../confing/urlconfig';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  host = serverurl;
  constructor(private http: HttpClient) { }
  public httpget(path) {
     const respocnceurl: string = this.host + path;
     const result = this.http.get(respocnceurl);
     console.log(result);
     return result;
  }
}

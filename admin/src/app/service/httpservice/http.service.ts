import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {serverurl} from '../../../confing/urlconfig';
import {catchError} from 'rxjs/operators';
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
  public httppost(path, bodyobj) {
    const responceurl: string = this.host + path;
    const result = this.http.post(responceurl, bodyobj);
    return result;
  }
}

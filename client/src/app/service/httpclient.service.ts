import { Injectable } from '@angular/core';
import {serverurl} from '../../config/urlconfig';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpclientService {
  host = serverurl
  constructor(private http: HttpClient) { }

  public httpget(path){
    const responceurl: string = this.host + path;
    const result = this.http.get(responceurl);
    return result;
  }

  public httppost(path,bodyobj){
    const responceurl: string = this.host + path;
    const result = this.http.post(responceurl, bodyobj);
    return result;
  }
}

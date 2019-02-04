import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangemysqldateService {

  constructor() { }
  tostringdate(date){
    var listdate = date.split('T');
    var resultdata = "";
    listdate = listdate[0];
    listdate = listdate.split('-')
    resultdata = listdate[0]+'年'+listdate[1]+'月'+listdate[2]+'日';
    return resultdata;
  }
}

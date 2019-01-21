import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../../service/httpservice/http.service';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {
  userprofile = {
    firstname: '',
    lastname: '',
    firstkananame: '',
    lastkananame: '',
    password: '',
    email: '',
    age : 0,
  };
  responceresult = '';
  autopasswordflg = false;
  constructor(private http: HttpService ) { }
  ngOnInit() {
  }
  click() {
    let responcedata;
    this.http.httppost('/', this.userprofile).subscribe(resdata =>{
      responcedata = resdata;
      if (responcedata[0].result == 'success') {
        this.responceresult = '登録完了しました';
      } else {
        this.responceresult = '登録出来ません';
      }
    });
  }
}

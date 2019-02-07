import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../../service/httpservice/http.service';
import {LocalStrageService} from '../../../../service/local_strage/local-strage.service';
import {Router} from '@angular/router';

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
  constructor(private http: HttpService, private localstrage: LocalStrageService,
              private router: Router ) { }
  ngOnInit() {
    if (this.localstrage.getlocalstragevalue()) {
      this.router.navigate(['/login']);
    }
  }
  adminaddclick() {
    let responcedata;
    this.http.httppost('/users/adminuseradd', this.userprofile).subscribe(resdata =>{
      responcedata = resdata;
      console.log(resdata);
      if (responcedata.result == 'success') {
        this.responceresult = '登録完了しました';
      } else {
        this.responceresult = '登録出来ません';
      }
    });
  }
}

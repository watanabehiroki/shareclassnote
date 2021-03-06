import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../service/httpservice/http.service';
import { LocalStrageService } from '../../../../service/local_strage/local-strage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {
  userprofile = {
    firstname: '',
    lastname: '',
    firstkananame: '',
    lastkananame: '',
    age: 0,
    sex: '',
    password: '',
    id: '',
  };
  result = {
    data: '',
    password: '',
  };
  idflg = false;
  passwordflg = false;
  buttonword = '手動入力';
  constructor(private httpservice: HttpService, private router: Router,
              private localstrage: LocalStrageService) { }

  ngOnInit() {
    if (this.localstrage.getlocalstragevalue()) {
      this.router.navigate(['/login']);
    }
  }
  passwordbuttonclick() {
    this.passwordflg = !this.passwordflg;
    if (this.passwordflg === true) {
      this.buttonword = '自動入力';
    } else {
      this.buttonword = '手動入力';
    }
  }
  private deleteformdata() {
    this.userprofile = {
      firstname: '',
      lastname: '',
      firstkananame: '',
      lastkananame: '',
      age: 0,
      sex: '',
      password: '',
      id: '',
    };
    this.passwordflg = false;
    this.buttonword = '手動入力';
  }
  submitclick() {
    let httpdata;
   this.httpservice.httppost('/users/clientuseradd', this.userprofile).subscribe(resdata => {
     httpdata = resdata;
     console.log(httpdata);
     if (httpdata.result === 'success' && httpdata.password !== undefined) {
       this.deleteformdata();
       this.result.data = '登録完了しました。　' + 'IDは' + httpdata.userid + ' パスワードは' + httpdata.password;
     } else if (httpdata.result === 'err' && httpdata.message === 'sameid') {
       this.result.data = 'IDがすでに登録されています';
     } else {
       this.result.data =  'パスワードまたはIDが間違っています';
     }
   }, err =>  {
     console.log('');
   });
  }
}

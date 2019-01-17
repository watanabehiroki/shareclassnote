import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../service/httpservice/http.service';
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
    password: ''
  };
  result = '';
  passwordflg = false;
  buttonword = '手動入力';
  constructor(private httpservice : HttpService) { }

  ngOnInit() {
  }
  passwordbuttonclick() {
    this.passwordflg = !this.passwordflg;
    if (this.passwordflg === true) {
      this.buttonword = '自動入力';
    } else {
      this.buttonword = '手動入力';
    }
  }
  submitclick() {
   this.httpservice.httppost('/user/clientuseradd', this.userprofile).subscribe(resdata => {
     console.log(resdata);
   }, err =>  {
     console.log('');
   });
  }
}

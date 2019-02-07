import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../service/httpservice/http.service';
import {LocalStrageService} from '../../../service/local_strage/local-strage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-groupadd',
  templateUrl: './groupadd.component.html',
  styleUrls: ['./groupadd.component.css']
})
export class GroupaddComponent implements OnInit {
  responcereuslt = '';
  groupprofile = {
    groupname: '',
    passphrase: '',
    year: 1,
    sessionid: '',
  };
  constructor(private httpservice: HttpService, private router: Router,
              private localStrage: LocalStrageService) { }

  ngOnInit() {
    if (this.localStrage.getlocalstragevalue()) {
      this.router.navigate(['/login']);
    }
  }
  clicksubmit() {
    console.log(this.localStrage.getsesionid());
    this.groupprofile.sessionid =  this.localStrage.getsesionid();
    this.httpservice.httppost('/group/addgroup/',
      this.groupprofile).subscribe(datas => {
        let sqlresult;
        sqlresult = datas;
        if (sqlresult.result === 'success') {
          this.groupprofile = {
            groupname: '',
            passphrase: '',
            year: 1,
            sessionid: '',
          }
          this.responcereuslt = '登録完了しました。';
        } else {
          if (sqlresult.message === 'sessionid') {
            this.localStrage.removelocalStrage();
            this.router.navigate(['/login']);
          } else {
            this.responcereuslt = '既に登録されている可能性があります。';
          }
        }
    });
  }

}

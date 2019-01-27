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
  groupprofile = {
    groupname: '',
    passphrase: '',
    year: 1,
  };
  constructor(private httpservice: HttpService, private router: Router,
              private localStrage: LocalStrageService) { }

  ngOnInit() {
    if (this.localStrage.getlocalstragevalue()) {
      this.router.navigate(['/login']);
    }
  }
  clicksubmit() {
    this.httpservice.httppost('/group/addgroup?sessionid=' + this.localStrage.getsesionid(),
      this.groupprofile).subscribe(datas => {
    });
  }

}

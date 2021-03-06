import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {StragedataService} from '../../../service/stragedata/stragedata.service';
import {LocalStrageService} from '../../../service/local_strage/local-strage.service';
@Component({
  selector: 'app-groupaddqrcode',
  templateUrl: './groupaddqrcode.component.html',
  styleUrls: ['./groupaddqrcode.component.css']
})
export class GroupaddqrcodeComponent implements OnInit {
  qrcodedata;
  size = 350;
  constructor(private router: Router,
              private strageservice: StragedataService,
              private localstrage: LocalStrageService) { }

  ngOnInit() {
    let stragejson;
    if (this.localstrage.getlocalstragevalue()) {
      this.router.navigate(['/login']);
    } else {
      if (this.strageservice.confirmqrdataflg()) {
         stragejson = this.strageservice.getqrdata();
         console.log( stragejson);
        this.qrcodedata = stragejson.adminemail + '*' + this.fonttobase64(stragejson.groupname) + '*' + this.fonttobase64(stragejson.passphase);
      } else {
        this.router.navigate(['/grouplist']);
      }
    }
  }
  removeqrcode() {
    this.strageservice.removeqrdata();
    this.router.navigate(['/grouplist']);
  }
  fonttobase64(text){

    return btoa(unescape(encodeURIComponent(text)));
  }
}

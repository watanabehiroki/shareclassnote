import { Component, OnInit } from '@angular/core';
import {LocalStrageService } from '../../../service/local_strage/local-strage.service';
import {HttpService} from '../../../service/httpservice/http.service';
import {Router} from '@angular/router';
import {StragedataService} from '../../../service/stragedata/stragedata.service';
import {text} from '@angular/core/src/render3';

@Component({
  selector: 'app-grouplist',
  templateUrl: './grouplist.component.html',
  styleUrls: ['./grouplist.component.css']
})
export class GrouplistComponent implements OnInit {
  grouplist;
  showdatalist;
  constructor(private router: Router, private httpservice: HttpService,
              private localStrage: LocalStrageService, private strage: StragedataService) { }

  ngOnInit() {
    if (this.localStrage.getlocalstragevalue()) {
      this.router.navigate(['/login']);
    } else {
      this.httpservice.httpget('/group/getallgrouplist?sessionid=' + this.localStrage.getsesionid()).subscribe(datas => {
        this.grouplist = datas;
        this.showdatalist = this.grouplist.datas;
        console.log(this.showdatalist);
      });
    }
  }
  accessqrcode(groupobj) {
    this.strage.setqrdata(groupobj.adminemail, groupobj.qcode, groupobj.groupname);
    this.router.navigate(['/groupaddqr']);
  }
  dateToString(datetext) {
    let result =  '';
    let  textlist = datetext.split('T');
    textlist = textlist[0].split('-');
    result = textlist[0] + '年' + textlist[1] + '月' + textlist[2] + '日';
    return result;
  }
}

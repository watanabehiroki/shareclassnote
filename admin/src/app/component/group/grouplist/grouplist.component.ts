import { Component, OnInit } from '@angular/core';
import {LocalStrageService } from '../../../service/local_strage/local-strage.service';
import {HttpService} from '../../../service/httpservice/http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-grouplist',
  templateUrl: './grouplist.component.html',
  styleUrls: ['./grouplist.component.css']
})
export class GrouplistComponent implements OnInit {
  grouplist;
  showdatalist;
  constructor(private router: Router, private httpservice: HttpService,
              private localStrage: LocalStrageService) { }

  ngOnInit() {
    if (this.localStrage.getlocalstragevalue()) {
      this.router.navigate(['/login']);
    } else {
      this.httpservice.httpget('/group/getallgrouplist?sessionid=' + this.localStrage.getsesionid()).subscribe(datas => {
        this.grouplist = datas;
        this.showdatalist = this.grouplist.datas;
        if (true) {

        }
      });
    }
  }

}

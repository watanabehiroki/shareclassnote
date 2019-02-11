import { Component, OnInit } from '@angular/core';
import { LocalStrageService } from '../../../service/local_strage/local-strage.service';
import { Router} from '@angular/router';
import {HttpService} from '../../../service/httpservice/http.service';

@Component({
  selector: 'app-groupnotelist',
  templateUrl: './groupnotelist.component.html',
  styleUrls: ['./groupnotelist.component.css']
})
export class GroupnotelistComponent implements OnInit {
  calenderlist;
  constructor(private router: Router, private Http: HttpService, private localStrage: LocalStrageService) { }
  selectdate ;
  outputdate = '';
  ngOnInit() {
    if (this.localStrage.getlocalstragevalue()) {
      this.router.navigate(['/login']);
    }
    // this.Http.httpget()

    this.selectdate = new Date();
    this.getDateData();
  }
  getDateData() {
    this.outputdate = this.selectdate.getFullYear() + '年' + (this.selectdate.getMonth() + 1) + '月';
  }
  clickupday() {
    this.selectdate.setMonth(this.selectdate.getMonth() + 1 );
    this.getDateData();
  }
  clickdownday() {

    this.selectdate.setMonth(this.selectdate.getMonth() - 1 );
    this.getDateData();
  }

}

import { Component, OnInit } from '@angular/core';
import { LocalStrageService } from '../../../service/local_strage/local-strage.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {HttpService} from '../../../service/httpservice/http.service';

@Component({
  selector: 'app-groupnotelist',
  templateUrl: './groupnotelist.component.html',
  styleUrls: ['./groupnotelist.component.css']
})
export class GroupnotelistComponent implements OnInit {
  calenderlist;
  constructor(private activeRoute: ActivatedRoute, private router: Router,
              private http: HttpService, private localStrage: LocalStrageService) { }
   date = {
    selectdate: new Date(),
    outputdate : '',
    nowdata: new Date(),
  };
  groupname;
  listnote;
  ngOnInit() {
    if (this.localStrage.getlocalstragevalue()) {
      this.router.navigate(['/login']);
    }
    this.activeRoute.paramMap.subscribe(
      (params: ParamMap) => {
        this.groupname =  params.get('groupname');
      }
    );
    const requestbody = {
      sessionid: this.localStrage.getsesionid(),
      groupname: this.groupname,
      month: this.date.selectdate,
    };
     this.http.httppost('/note/groupallnote', requestbody).subscribe((datas: any) => {
       this.listnote = datas.datas;
       console.log(datas);
     });

    this.date.selectdate = new Date();
    this.getDateData();
  }
  getDateData() {
    this.date.outputdate = this.date.selectdate.getFullYear() + '年' + (this.date.selectdate.getMonth() + 1) + '月';
  }
  clickupday() {
    this.date.selectdate.setMonth(this.date.selectdate.getMonth() + 1 );
    const requestbody = {
      sessionid: this.localStrage.getsesionid(),
      groupname: this.groupname,
      month: this.date.selectdate,
    };
    this.http.httppost('/note/groupallnote', requestbody).subscribe((datas: any) => {
      this.listnote = datas.datas;
    });
    this.getDateData();
  }
  clickdownday() {

    this.date.selectdate.setMonth(this.date.selectdate.getMonth() - 1 );
    const requestbody = {
      sessionid: this.localStrage.getsesionid(),
      groupname: this.groupname,
      month: this.date.selectdate,
    };
    this.http.httppost('/note/groupallnote', requestbody).subscribe((datas: any) => {
      this.listnote = datas.datas;
      console.log(datas);
    });
    this.getDateData();
  }
  releaseflgTostring(flg) {
    let result = '';
    if (flg === 0) {
      result = '非公開';
    } else {
      result = '公開';
    }
    return result;
  }
  datetostring(date) {
    let  result: any = '';
    date = date.split('T');
    date = date[0].split('-');
    result = date[0] + '年' + date[1] + '月' + date[2] + '日';
    return result;
  }
}

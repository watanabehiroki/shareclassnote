import { Component, OnInit } from '@angular/core';
import {LocalStrageService} from '../../../service/local_strage/local-strage.service';
import {HttpService} from '../../../service/httpservice/http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-groupnoteoperation',
  templateUrl: './groupnoteoperation.component.html',
  styleUrls: ['./groupnoteoperation.component.css']
})
export class GroupnoteoperationComponent implements OnInit {
  grouplist;
  constructor(private router: Router, private http: HttpService, private localStrage: LocalStrageService) { }

  ngOnInit() {
    if (this.localStrage.getlocalstragevalue()) {
      this.router.navigate(['/login']);
    }
    this.http.httpget('/group/getallgrouplist?sessionid=' + this.localStrage.getsesionid()).subscribe(data =>{
      const httpresdata: any = data;
      if (httpresdata.result === 'success') {
        this.grouplist = httpresdata.datas;
      }
    });
  }


}

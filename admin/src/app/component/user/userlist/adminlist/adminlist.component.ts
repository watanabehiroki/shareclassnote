import { Component, OnInit } from '@angular/core';
import { LocalStrageService } from '../../../../service/local_strage/local-strage.service';
import {Router} from '@angular/router';
import {HttpService} from '../../../../service/httpservice/http.service';

@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.css']
})
export class AdminlistComponent implements OnInit {
  listuser = '';
  constructor(private localStrage: LocalStrageService, private router: Router,
              private http: HttpService) { }
  ngOnInit() {
    if (this.localStrage.getlocalstragevalue()) {
      this.router.navigate(['/login']);
    }
     this.http.httpget('/users/getalladminuser?sessionid=' + this.localStrage.getsesionid()).subscribe((datas: any) => {
       if (datas.result === 'success') {
         this.listuser = datas.datas;
         console.log(datas);
       }
     });
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpService } from  '../../../service/httpservice/http.service';
import { Router } from '@angular/router';
import { LocalStrageService } from '../../../service/local_strage/local-strage.service';

@Component({
  selector: 'app-listsubject',
  templateUrl: './listsubject.component.html',
  styleUrls: ['./listsubject.component.css']
})
export class ListsubjectComponent implements OnInit {
  listsubject;
  constructor(private httpservice: HttpService, private router: Router, private localStrage: LocalStrageService) { }

  ngOnInit() {
    if (this.localStrage.getlocalstragevalue()) {
      this.router.navigate(['/login']);
    }
    this.httpservice.httpget('/subject/getallsubject').subscribe( resdata =>{
      this.listsubject = resdata;
    },
        err => {console.log(err); } );
  }
  datetostring(datetext) {
    let result = '';
    let datelist = datetext.split('T');
    datelist = datelist[0].split('-');
    result = datelist[0] + '年' + datelist[1] + '月' + datelist[2] + '日';
    return result;
  }
}

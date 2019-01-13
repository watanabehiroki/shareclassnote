import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../service/httpservice/http.service';
@Component({
  selector: 'app-setsubject',
  templateUrl: './setsubject.component.html',
  styleUrls: ['./setsubject.component.css']
})
export class SetsubjectComponent implements OnInit {
  color = '';
  subname = '';
  other = '';
  listsubjectobj;
  constructor(private httpservice: HttpService) { }
  ngOnInit() {
    this.httpservice.httpget('/getsubject').subscribe(resdata => {
      this.listsubjectobj = resdata;
    });
  }
  submitclick() {
  }

}

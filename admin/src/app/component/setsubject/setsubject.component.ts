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
    this.httpservice.httpget('/subject/getallsubject').subscribe(resdata =>
    {
      this.listsubjectobj = resdata; console.log(resdata);
    },
      err => console.log(err)
    );
  }
  submitclick() {
    this.httpservice.httpget('/').subscribe((data) =>
      console.log(data)
    );
  }

}

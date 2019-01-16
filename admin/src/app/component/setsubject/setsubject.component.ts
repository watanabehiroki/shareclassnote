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
  responsevalue = '';
  constructor(private httpservice: HttpService) { }
  ngOnInit() {
    this.httpservice.httpget('/subject/getallsubject').subscribe(resdata =>
    {
      this.listsubjectobj = resdata; console.log(this.listsubjectobj);
    },
      err => console.log(err)
    );
  }
  submitclick() {
    const httpbodyobj = {
      name: this.subname,
      color: this.color
    }
    this.httpservice.httppost('/subject/addsubject', httpbodyobj).subscribe(resdata => {}), err => {
      };
      });
  }

}

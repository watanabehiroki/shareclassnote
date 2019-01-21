import { Component, OnInit } from '@angular/core';
import { HttpService} from '../../../service/httpservice/http.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editsubject',
  templateUrl: './editsubject.component.html',
  styleUrls: ['./editsubject.component.css']
})
export class EditsubjectComponent implements OnInit {
  subjectobj;
  paramid;
  subjectcolor;
  subjectname;
  subjectid;
  constructor(private  httpservice: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.paramid = this.route.snapshot.params['subjectid'];
    this.httpservice.httpget('/subject/findsubject?subjectid=' + this.paramid).subscribe( resdata =>{
      this.subjectobj = resdata;
      this.subjectcolor = this.subjectobj[0].color;
      this.subjectname = this.subjectobj[0].name;
      this.subjectid = this.subjectobj[0].id;
    },
        err => {
      console.log('err');
    });
  }
  editclick() {
    const reqbody = {
      subjectname: this.subjectname,
      subjectcolor: this.subjectcolor,
      subjectid: this.subjectid
    }
   this.httpservice.httppost('', reqbody).subscribe(resdata => {
        const data = resdata;
        if ( data[0].result === 'success') {
        } else {
        }
   },
       err => {}
       );
  }
}

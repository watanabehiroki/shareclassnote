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
  constructor(private  httpservice: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.paramid = this.route.snapshot.params['subjectid'];
    this.httpservice.httpget('/subject/findsubject').subscribe( resdata =>{
      this.subjectobj = resdata;
    },
        err => {
      console.log('err');
    });
  }

}

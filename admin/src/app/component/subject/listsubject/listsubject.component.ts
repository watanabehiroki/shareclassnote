import { Component, OnInit } from '@angular/core';
import { HttpService } from  '../../../service/httpservice/http.service';
@Component({
  selector: 'app-listsubject',
  templateUrl: './listsubject.component.html',
  styleUrls: ['./listsubject.component.css']
})
export class ListsubjectComponent implements OnInit {
  listsubject;
  constructor(private httpservice: HttpService) { }

  ngOnInit() {
    this.httpservice.httpget('/subject/getallsubject').subscribe( resdata =>{
      this.listsubject = resdata;
    },
        err => {console.log(err); } );
  }

}

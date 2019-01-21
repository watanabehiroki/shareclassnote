import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../service/httpservice/http.service';
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
    this.httpservice.httpget('/subject/getallsubject').subscribe(resdata => {
      this.listsubjectobj = resdata;
    },
      err => console.log(err)
    );
  }
  submitclick() {
    let data;
    const httpbodyobj = {
      name: this.subname,
      color: this.color
    }
    this.httpservice.httppost('/subject/addsubject', httpbodyobj).subscribe(resdata => {
       data = resdata;
      if (data.result == 'success') {
        this.responsevalue = '登録しました';
      } else if (data.result === 'err'|| resdata[0].result === undefined) {
        this.responsevalue = '登録することが出来ませんでした';
      } else {
        this.responsevalue = 'エラー発生';
      }
    }, err => {
      this.responsevalue = 'エラー発生';
      });
  }

}

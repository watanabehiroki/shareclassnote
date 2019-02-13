import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../service/httpservice/http.service';
@Component({
  selector: 'app-setsubject',
  templateUrl: './setsubject.component.html',
  styleUrls: ['./setsubject.component.css']
})
export class SetsubjectComponent implements OnInit {
  listsubjectobj;
  responsevalue = '';
  httpbody = {
    name: '',
    color: '',
  }
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

    this.httpservice.httppost('/subject/addsubject', this.httpbody).subscribe(resdata => {
       data = resdata;
      if (data.result == 'success') {
        this.responsevalue = '登録しました';
        this.httpbody.name = '';
      } else if (data.result === 'err' ||  resdata[0].result === undefined) {
        this.responsevalue = '登録することが出来ませんでした';
      } else {
        this.responsevalue = 'エラー発生';
      }
    }, err => {
      this.responsevalue = 'エラー発生';
      });
  }
  datetoString(datetext) {
    let result = '';
    let datelist = datetext.split('T');
    datelist = datelist[0].split('-');
    result = datelist[0] + '年' + datelist[1] + '月' + datelist[2] + '日';
    return result;
  }
}

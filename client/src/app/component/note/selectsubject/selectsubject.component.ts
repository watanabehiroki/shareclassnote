import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpclientService } from '../../../service/httpclient.service';
@Component({
  selector: 'app-selectsubject',
  templateUrl: './selectsubject.component.html',
  styleUrls: ['./selectsubject.component.css']
})
export class SelectsubjectComponent implements OnInit {
  subjectlist;
  rowcountlist=[];
  countpage = 1;
  max_page=1;
  pagepanelrow = 3;//一列に表示する個数を設定する
  pagepanelcolumn = 3;//一行に表示する数
  constructor(private router:Router, private httpclient: HttpclientService) { }

  ngOnInit() {
    var resdatalist;
    this.httpclient.httpget('/subject/getallsubject').subscribe(resdata =>{
      this.subjectlist = resdata;
      this.max_page = Math.floor(this.subjectlist/(this.pagepanelcolumn*this.pagepanelrow))+1;
      this.rowcountlist = this.setdatalist();
    },err =>{

    })
  }
  setdatalist(){
    var resultlist = [];
    var listcontent = [];
    //　表示するスタート地点の配列番号を指定する
    var liststartnumber = this.pagepanelrow*this.pagepanelcolumn*(this.countpage-1);
    if(this.subjectlist.length > this.pagepanelcolumn*this.pagepanelrow*(this.countpage)){
      //９個以上ある時
      for(let i = 0;i<this.pagepanelrow;i++){
        listcontent = [];
        for(let j = 1; j <= this.pagepanelcolumn; i++){
          resultlist.push(this.subjectlist[liststartnumber+(i+j+1)]);
        }
        resultlist.push(listcontent);
      }
    }else{
      //すべての個数が埋まらないとき

      for(let i = 0; i < this.subjectlist.length-liststartnumber; i++){
        listcontent.push(this.subjectlist[liststartnumber+i]);
        if(i%3 == this.pagepanelcolumn-1 || i == this.subjectlist.length-liststartnumber-1){
          resultlist.push(listcontent);
          listcontent = [];
        }

      }
    }
    return resultlist;
  }

  accesslistnote(subject){
    this.router.navigate(['pubnotelist/'+subject]);
  }

}

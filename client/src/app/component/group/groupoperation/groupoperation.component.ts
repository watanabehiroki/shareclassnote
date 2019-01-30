import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groupoperation',
  templateUrl: './groupoperation.component.html',
  styleUrls: ['./groupoperation.component.css']
})
export class GroupoperationComponent implements OnInit {
  groupopelist = [
    {name:'QRコード読み取り',color:'#F00',path:'/groupadqrcode'},
    {name:'参加グループ一覧',color:'#0FF',path:'/groupaddlist'},
  ]
  constructor() { }

  ngOnInit() {
  }

}

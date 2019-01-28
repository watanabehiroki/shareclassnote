import { Component, OnInit } from '@angular/core';
import { StragedataService } from '../../../service/stragedata/stragedata.service';
import { Router } from '@angular/router';
import { LocalStrageService } from '../../../service/local_strage/local-strage.service';

@Component({
  selector: 'app-groupadd-success',
  templateUrl: './groupadd-success.component.html',
  styleUrls: ['./groupadd-success.component.css']
})
export class GroupaddSuccessComponent implements OnInit {

  constructor(private router: Router,
              private strageservice: StragedataService,
              private localstrage: LocalStrageService) {}

  ngOnInit() {

  }

}

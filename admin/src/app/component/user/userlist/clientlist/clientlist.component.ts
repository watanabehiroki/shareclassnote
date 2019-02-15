import { Component, OnInit } from '@angular/core';
import { LocalStrageService } from '../../../../service/local_strage/local-strage.service';
import { HttpService} from '../../../../service/httpservice/http.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css']
})
export class ClientlistComponent implements OnInit {
  listname = [{name: 'あ行'}, {name: 'か行'}, {name:　'さ行'}, {name:　'た行'}, {name: 'な行'}, {name: 'は行'},
    {name: 'ま行'}, {name:　'や行'}, {name: 'ら行'}, {name: 'わ行'}, {name: 'その他'}]
  listuser;
  constructor(private http: HttpService, private router: Router, private localStrage: LocalStrageService) { }

  ngOnInit() {
    if (this.localStrage.getlocalstragevalue()) {
      this.router.navigate(['/login']);
    }
    this.http.httpget('/users/getallclient?sessionid=' + this.localStrage.getsesionid()).subscribe((data: any) => {
      if (data.result === 'success') {
        this.listuser = data.datas;
        console.log(data);
      }
    });
  }

}

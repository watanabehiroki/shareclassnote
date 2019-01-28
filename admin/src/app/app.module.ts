import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QRCodeModule} from 'angularx-qrcode';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/headerfooter/footer/footer.component';
import { SetsubjectComponent } from './component/subject/setsubject/setsubject.component';
import { AddclientComponent } from './component/user/adduser/addclient/addclient.component';
import { AddadminComponent } from './component/user/adduser/addadmin/addadmin.component';
import { LoginComponent } from './component/login/login.component';
import { GroupaddComponent } from './component/group/groupadd/groupadd.component';
import { GrouplistComponent } from './component/group/grouplist/grouplist.component';
import { DetailgroupComponent } from './component/group/detailgroup/detailgroup.component';
import { UserlistComponent } from './component/user/userlist/userlist.component';
import { DetailuserComponent } from './component/user/detailuser/detailuser.component';
import { ListsubjectComponent } from './component/subject/listsubject/listsubject.component';
import { EditsubjectComponent } from './component/subject/editsubject/editsubject.component';
import { MenuComponent } from './component/headerfooter/menu/menu.component';
import { GroupaddSuccessComponent } from './component/group/groupadd-success/groupadd-success.component';
import { GroupaddqrcodeComponent } from './component/group/groupaddqrcode/groupaddqrcode.component';
import { RemovegroupComponent } from './component/group/removegroup/removegroup.component';


import {  HttpService } from './service/httpservice/http.service';
import { LocalStrageService} from './service/local_strage/local-strage.service';
import { StragedataService} from './service/stragedata/stragedata.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SetsubjectComponent,
    AddclientComponent,
    AddadminComponent,
    LoginComponent,
    GroupaddComponent,
    GrouplistComponent,
    DetailgroupComponent,
    UserlistComponent,
    DetailuserComponent,
    ListsubjectComponent,
    EditsubjectComponent,
    MenuComponent,
    GroupaddSuccessComponent,
    GroupaddqrcodeComponent,
    RemovegroupComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    QRCodeModule
  ],
  providers: [
    HttpService,
    LocalStrageService,
    StragedataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

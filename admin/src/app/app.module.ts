import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import {  HttpService }　from  './service/httpservice/http.service';
import { LocalStrageService} from './service/local_strage/local-strage.service';
import { MenuComponent } from './component/headerfooter/menu/menu.component';

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
    MenuComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HttpService, LocalStrageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './component/headerfooter/footer/footer.component';
import { HeaderComponent } from './component/headerfooter/header/header.component';
import { SetsubjectComponent } from './component/setsubject/setsubject.component';
import { AddclientComponent } from './component/adduser/addclient/addclient.component';
import { AddadminComponent } from './component/adduser/addadmin/addadmin.component';
import { LoginComponent } from './component/login/login.component';
import {  HttpService } from  './service/httpservice/http.service';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SetsubjectComponent,
    AddclientComponent,
    AddadminComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

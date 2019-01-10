import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { AddgroupComponent } from './component/addgroup/addgroup.component';
import { SubmitnoteComponent } from './component/note/submitnote/submitnote.component';
import { ReadingnoteComponent } from './component/note/readingnote/readingnote.component';
import { SelectnoteoperationComponent } from './component/note/selectnoteoperation/selectnoteoperation.component';
import { SelectsubjectComponent } from './component/note/selectsubject/selectsubject.component';
import { DetailnoteComponent } from './component/note/detailnote/detailnote.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddgroupComponent,
    SubmitnoteComponent,
    ReadingnoteComponent,
    SelectnoteoperationComponent,
    SelectsubjectComponent,
    DetailnoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

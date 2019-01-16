import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {LoginComponent} from  './component/login/login.component';
import {SelectnoteoperationComponent} from './component/note/selectnoteoperation/selectnoteoperation.component';
import {SubmitnoteComponent} from './component/note/submitnote/submitnote.component';
import {SelectsubjectComponent} from './component/note/selectsubject/selectsubject.component';
import {DetailnoteComponent} from './component/note/detailnote/detailnote.component';
import {PubnotelistComponent} from './component/note/pubnotelist/pubnotelist.component';

const routes: Routes = [
  {path: '', redirectTo:'/home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'selectnoteope', component: SelectnoteoperationComponent},
  {path: 'submitnote', component: SubmitnoteComponent},
  {path: 'selectsubject', component: SelectsubjectComponent},
  {path: 'detailnote',  component: DetailnoteComponent},
  {path: 'pubnotelist/:subjectid',component:PubnotelistComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

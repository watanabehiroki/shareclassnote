import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddadminComponent } from './component/adduser/addadmin/addadmin.component';
import { AddclientComponent } from './component/adduser/addclient/addclient.component';
import { SetsubjectComponent } from './component/setsubject/setsubject.component';
import { LoginComponent } from './component/login/login.component';
const routes: Routes = [
  {path: '', redirectTo: '/setsubject', pathMatch: 'full'},
  {path: 'setsubject', component: SetsubjectComponent},
  {path: 'addadmin', component: AddadminComponent},
  {path: 'client', component: AddclientComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddadminComponent } from './component/user/adduser/addadmin/addadmin.component';
import { AddclientComponent } from './component/user/adduser/addclient/addclient.component';
import { SetsubjectComponent } from './component/subject/setsubject/setsubject.component';
import { LoginComponent } from './component/login/login.component';
const routes: Routes = [
    {path: '', redirectTo: '/addclient', pathMatch: 'full'},
  {path: 'setsubject', component: SetsubjectComponent},
  {path: 'addadmin', component: AddadminComponent},
  {path: 'addclient', component: AddclientComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";
import {RoleManagementComponent} from "./role-management/role-management.component";
import {BoardUserComponent} from "./board-user/board-user.component";
import {BoardOperatorComponent} from "./board-operator/board-operator.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'admin', component: RoleManagementComponent},
  {path: 'operator', component: BoardOperatorComponent},
  {path: 'user', component: BoardUserComponent},
  // {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

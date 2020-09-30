import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MainComponent} from './main/main.component';
import {UsersComponent} from './users/users.component';
import {LoginUsersGuard} from './service/loginUsers.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'users', component: UsersComponent,  canActivate: [LoginUsersGuard]},
  {path: 'main', component: MainComponent, canActivate: [LoginUsersGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

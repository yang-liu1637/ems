import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MainComponent} from './main/main.component';
import {UsersComponent} from './users/users.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'users', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

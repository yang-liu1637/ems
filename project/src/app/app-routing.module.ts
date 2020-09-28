import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MainComponent} from './main/main.component';
import {UsersComponent} from './users/users.component';
import {LoginUsersGuard} from './service/loginUsers.guard';
import {AdminComponent} from './admin/admin.component';
import {ShowComponent} from './show/show.component';
import {ListComponent} from './admin/list/list.component';
import {UpdateCommand} from '@angular/cli/commands/update-impl';
import {UpdateComponent} from './admin/update/update.component';
import {AddComponent} from './admin/add/add.component';
import {RadioComponent} from './radio/radio.component';

const routes: Routes = [
  {path: '', component: ShowComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent,  canActivate: [LoginUsersGuard]},
  {path: 'users', component: UsersComponent}, /*,  canActivate: [LoginUsersGuard]*/
  {path: 'main', component: MainComponent,  canActivate: [LoginUsersGuard]},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/list', component: ListComponent},
  {path: 'admin/add', component: AddComponent},
  {path: 'admin/update/:id', component: UpdateComponent},
  {path: 'radio', component: RadioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

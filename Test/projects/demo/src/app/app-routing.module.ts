import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {AuthorizationGuardService} from './shared/service/authorizationGuard.service';

const routes: Routes = [
  { path: '', loadChildren: () => import('./show/show.module').then(m => m.ShowModule), pathMatch: 'full' },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthorizationGuardService] },
  { path: 'admin/add', loadChildren: () => import('./admin/add/add.module').then(m => m.AddModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'users', loadChildren: () => import('./user/users/users.module').then(m => m.UsersModule) },
  { path: 'register', loadChildren: () => import('./shared/register/register.module').then(m => m.RegisterModule) },
  { path: 'main', loadChildren: () => import('./user/main/main.module').then(m => m.MainModule) },
  { path: 'admin/list', loadChildren: () => import('./admin/list/list.module').then(m => m.ListModule) },
  { path: 'admin/update/:id', loadChildren: () => import('./admin/update/update.module').then(m => m.UpdateModule) },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ AuthorizationGuardService]
})
export class AppRoutingModule { }

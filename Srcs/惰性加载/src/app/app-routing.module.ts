import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

 { path: '', loadChildren: () => import('./show/show.module').then(m => m.ShowModule) },

 { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },

 { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },

 { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },

 { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },

 { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

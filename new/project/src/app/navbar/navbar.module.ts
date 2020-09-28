import {NavbarComponent} from './navbar.component';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from '../main/main.component';
import {UsersComponent} from '../users/users.component';



const route: Routes = [{ path: 'main', component: MainComponent }, { path: 'users', component: UsersComponent }];
@NgModule({
  declarations: [NavbarComponent],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(route),
  ]
})
export class NavbarModule {

}

import {DoUsersService} from '../service/doUsers.service';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from './register.component';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AdminNavModule } from '../navbar/admin-nav/admin-nav.module';

const route: Routes = [{ path: 'register', component: RegisterComponent }];

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(route),
    AdminNavModule
  ],
  exports: [
    RegisterComponent
  ],
  providers: [DoUsersService]
})
export class RegisterModule { }

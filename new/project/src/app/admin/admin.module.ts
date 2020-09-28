import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AdminComponent } from './admin.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginUsersService} from '../service/loginUsers.service';
import {HttpClientModule} from '@angular/common/http';
import {AdminNavModule} from '../navbar/admin-nav/admin-nav.module';


const route: Routes = [{ path: '', component: AdminComponent }];

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(route),
    AdminNavModule,
  ],
  providers: [LoginUsersService]
})
export class AdminModule { }

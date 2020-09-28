import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AddComponent } from './add.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {DoUsersService} from '../../service/doUsers.service';
import {ReactiveFormsModule} from '@angular/forms';
import {AdminNavModule} from '../../navbar/admin-nav/admin-nav.module';
import {LoginUsersService} from '../../service/loginUsers.service';


const route: Routes = [{ path: '', component: AddComponent }];

@NgModule({
  declarations: [AddComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(route),
    ReactiveFormsModule,
    AdminNavModule,

  ],
  providers: [DoUsersService, LoginUsersService]
})
export class AddModule { }

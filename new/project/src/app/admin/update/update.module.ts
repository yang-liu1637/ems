import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from '../admin.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AdminNavModule} from '../../navbar/admin-nav/admin-nav.module';
import {LoginUsersService} from '../../service/loginUsers.service';
import {UpdateComponent} from './update.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DoUsersService} from '../../service/doUsers.service';



const route: Routes = [{ path: '', component: UpdateComponent }];

@NgModule({
  declarations: [UpdateComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AdminNavModule,
    ReactiveFormsModule,
   RouterModule.forChild(route),
  ],
  providers: [
    DoUsersService
  ]
})

export class UpdateModule { }

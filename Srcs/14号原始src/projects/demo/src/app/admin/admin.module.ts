import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AdminComponent } from './admin.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AdminNavModule} from '../shared/navbar/admin-nav/admin-nav.module';


const route: Routes = [{ path: '', component: AdminComponent }];

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(route),
    AdminNavModule,
  ]
})
export class AdminModule { }

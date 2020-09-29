import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AdminNavModule} from '../../navbar/admin-nav/admin-nav.module';
import {ListComponent} from './list.component';

const route: Routes = [{ path: '', component: ListComponent }];

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(route),
    AdminNavModule,

  ]
})

export class ListModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AdminNavModule} from '../../shared/navbar/admin-nav/admin-nav.module';
import {ListComponent} from './list.component';
import { FormsModule } from '@angular/forms';

const route: Routes = [{ path: '', component: ListComponent }];

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(route),
    AdminNavModule,
    FormsModule

  ]
})

export class ListModule { }

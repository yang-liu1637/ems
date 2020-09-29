import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AddComponent } from './add.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {AdminNavModule} from '../../navbar/admin-nav/admin-nav.module';

const route: Routes = [{ path: '', component: AddComponent }];

@NgModule({
  declarations: [AddComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(route),
    ReactiveFormsModule,
    AdminNavModule,

  ]
})
export class AddModule { }

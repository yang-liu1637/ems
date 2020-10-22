import {forwardRef, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';


import { AddComponent } from './add.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AdminNavModule} from '../../shared/navbar/admin-nav/admin-nav.module';
const route: Routes = [{ path: '', component: AddComponent }];

@NgModule({
  declarations: [AddComponent],

  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(route),
    AdminNavModule

  ]
})
export class AddModule { }

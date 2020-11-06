import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AdminComponent } from './admin.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AdminNavModule} from '../shared/navbar/admin-nav/admin-nav.module';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {FormsModule} from '@angular/forms';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzWaveModule} from 'ng-zorro-antd/core/wave';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzListModule} from 'ng-zorro-antd/list';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';
import {NzFormModule} from 'ng-zorro-antd/form';
import { NzCommentModule } from 'ng-zorro-antd/comment';

const route: Routes = [{ path: '', component: AdminComponent }];

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(route),
    AdminNavModule,
    NzTableModule,
    FormsModule,
    NzIconModule,
    NzInputModule,
    NzWaveModule,
    NzButtonModule,
    NzDropDownModule,
    NzListModule,
    NzAvatarModule,
    NzFormModule,
    NzCommentModule

  ],
  exports: []
})
export class AdminModule { }

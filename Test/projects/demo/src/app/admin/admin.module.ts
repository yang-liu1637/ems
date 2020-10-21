import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AdminComponent } from './admin.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AdminNavModule} from '../shared/navbar/admin-nav/admin-nav.module';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzIconModule} from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import {FormsModule} from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzGridModule } from 'ng-zorro-antd/grid';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
const route: Routes = [{ path: '', component: AdminComponent }];

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(route),
    AdminNavModule,
    NzButtonModule,
    NzIconModule,
    NzMenuModule,
    NzTypographyModule,
    NzLayoutModule,
    NzFormModule,
    NzInputModule,
    NzCheckboxModule,
    FormsModule,
    NzGridModule,
    NzTableModule,
    NzDividerModule,
    NzBreadCrumbModule
  ],
  exports: []
})
export class AdminModule { }

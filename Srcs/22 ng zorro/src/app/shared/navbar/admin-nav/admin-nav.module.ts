import {AdminNavComponent} from './admin-nav.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { AdminComponent } from '../../../admin/admin.component';
import { CheckboxGroupComponent } from '../../checkbox-group/checkbox-group.component';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';


const route: Routes = [{ path: 'admin/add', component: AdminComponent }];
@NgModule({
  declarations: [AdminNavComponent, CheckboxGroupComponent],
  exports: [
    AdminNavComponent,
    CheckboxGroupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(route),
    NzMenuModule,
    NzGridModule,
    NzLayoutModule,
    NzBreadCrumbModule
  ]
})
export class AdminNavModule {

}

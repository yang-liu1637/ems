import {NgModule} from '@angular/core';
import {ShowComponent} from './show.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NavbarModule} from '../shared/navbar/navbar.module';
import {RegisterModule} from '../shared/register/register.module';
import {LogNavModule} from '../shared/navbar/log-nav/log-nav.module';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzSliderModule} from 'ng-zorro-antd/slider';
import {NzBreadCrumbItemComponent, NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzWaveModule} from 'ng-zorro-antd/core/wave';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {NzGridModule} from 'ng-zorro-antd/grid';

const route: Routes = [{ path: '', component: ShowComponent }];

@NgModule({
  declarations: [ShowComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(route),
    NavbarModule,
    RegisterModule,
    NzLayoutModule,
    NzGridModule,
    NzIconModule,

  ]
})
export class ShowModule { }

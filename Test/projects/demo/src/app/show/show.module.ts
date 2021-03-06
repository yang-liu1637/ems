import {NgModule} from '@angular/core';
import {ShowComponent} from './show.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NavbarModule} from '../shared/navbar/navbar.module';
import {RegisterModule} from '../shared/register/register.module';
import {NzTransitionPatchModule} from 'ng-zorro-antd/core/transition-patch/transition-patch.module';
import {NzIconModule} from 'ng-zorro-antd/icon';

const route: Routes = [{ path: '', component: ShowComponent }];

@NgModule({
  declarations: [ShowComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(route),
    ReactiveFormsModule,
    NavbarModule,
    RegisterModule,
    NzIconModule

  ]
})
export class ShowModule { }

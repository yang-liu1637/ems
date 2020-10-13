import {NgModule} from '@angular/core';
import {ShowComponent} from './show.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NavbarModule} from '../navbar/navbar.module';
import {RegisterModule} from '../register/register.module';

const route: Routes = [{ path: '', component: ShowComponent }];

@NgModule({
  declarations: [ShowComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(route),
    ReactiveFormsModule,
    NavbarModule,
    RegisterModule

  ]
})
export class ShowModule { }

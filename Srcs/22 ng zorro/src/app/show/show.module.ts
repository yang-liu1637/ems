import {NgModule} from '@angular/core';
import {ShowComponent} from './show.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NavbarModule} from '../shared/navbar/navbar.module';
import {RegisterModule} from '../shared/register/register.module';
import {LogNavModule} from '../shared/navbar/log-nav/log-nav.module';

const route: Routes = [{ path: '', component: ShowComponent }];

@NgModule({
  declarations: [ShowComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild(route),
        NavbarModule

    ]
})
export class ShowModule { }

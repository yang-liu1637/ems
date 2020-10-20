import {forwardRef, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';


import { AddComponent } from './add.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminNavModule} from '../../shared/navbar/admin-nav/admin-nav.module';
import { CheckboxGroupComponent } from '../../shared/checkbox-group/checkbox-group.component';
import { MainModule } from '../../user/main/main.module';
const route: Routes = [{ path: '', component: AddComponent }];

@NgModule({
  declarations: [AddComponent, CheckboxGroupComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(route),
    ReactiveFormsModule,
    AdminNavModule,
    FormsModule,
    MainModule

  ]
})
export class AddModule { }

import {forwardRef, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';


import { AddComponent } from './add.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminNavModule} from '../../navbar/admin-nav/admin-nav.module';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';
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

    ]
})
export class AddModule { }

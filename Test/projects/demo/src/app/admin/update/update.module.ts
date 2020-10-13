import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AdminNavModule} from '../../navbar/admin-nav/admin-nav.module';
import {UpdateComponent} from './update.component';
import {ReactiveFormsModule} from '@angular/forms';


const route: Routes = [{ path: '', component: UpdateComponent }];

@NgModule({
  declarations: [UpdateComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AdminNavModule,
    ReactiveFormsModule,
   RouterModule.forChild(route),
  ]
})

export class UpdateModule {       }

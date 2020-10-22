import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {UpdateComponent} from './update.component';


const route: Routes = [{ path: '', component: UpdateComponent }];

@NgModule({
  declarations: [UpdateComponent],
  imports: [
    CommonModule,
    HttpClientModule,
   RouterModule.forChild(route),
  ]
})

export class UpdateModule {       }

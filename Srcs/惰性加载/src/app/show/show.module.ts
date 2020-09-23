import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowRoutingModule } from './show-routing.module';
import { ShowComponent } from './show.component';
import {NavbarModule} from '../navbar/navbar.module';
import {RegisterModule} from '../register/register.module';


@NgModule({
  declarations: [ShowComponent],
    imports: [
        CommonModule,
        ShowRoutingModule,
        NavbarModule,
        RegisterModule
    ]
})
export class ShowModule { }

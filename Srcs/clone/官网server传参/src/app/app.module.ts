import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AstronautComponent} from './astronaut.component';
import {MissionControlComponent} from './missioncontrol.component';

@NgModule({
  declarations: [
    AppComponent,
    AstronautComponent,
    MissionControlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

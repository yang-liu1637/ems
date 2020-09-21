import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { UsersComponent } from './users/users.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { ShowComponent } from './show/show.component';
import { LogNavComponent } from './navbar/log-nav/log-nav.component';
import { ListComponent } from './admin/list/list.component';
import { UpdateComponent } from './admin/update/update.component';
import { AddComponent } from './admin/add/add.component';
import { AdminNavComponent } from './navbar/admin-nav/admin-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    MainComponent,
    UsersComponent,
    AdminComponent,
    ShowComponent,
    LogNavComponent,
    ListComponent,
    UpdateComponent,
    AddComponent,
    AdminNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

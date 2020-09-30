import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';
import {LoginUsersService} from '../service/loginUsers.service';
import {LoginUser} from '../models/loginUser.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  loginForm: FormGroup;
  isSubmitted = false;
  username;
  email;
  password;
  userRole;
  users: LoginUser[];
  title: any;
  constructor( private userService: LoginUsersService, private router: Router) {
  }
  // Form controls
  get formControls(): { [p: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  // Function for login
  login(): void {
    this.isSubmitted = true;
    this.username = this.loginForm.value.username;
    this.email = this.loginForm.value.email;
    this.password = this.loginForm.value.password;
    if (this.loginForm.invalid) {
      return;
    } else {
      // Login Validation
      this.userService.getUsers().subscribe((data: any) => {
        this.users = data;
        for (const val of data) {
          if (val.username === this.username && val.email === this.email && val.password === this.password) {
            this.userService.login(this.loginForm.value);
            if (val.userRole === 'Candidate') {
              localStorage.setItem('username', this.username);
              this.router.navigateByUrl('/main');
            }
          } else {
            /*this.msg = 'Invalid Credentials';*/
            /*错误*/
          }
        }
      });
    }
  }
}


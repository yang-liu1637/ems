import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginUsersService} from '../service/loginUsers.service';
import { Router } from '@angular/router';
import {CommonService} from '../service/common.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  isSubmitted  =  false;
  username;
  email;
  password;
  userRole;
  msg = false;
  users: object;
  arr: Observable<any>;

  constructor(private loginService: LoginUsersService, private router: Router,
              private formBuilder: FormBuilder , private message: CommonService) { }
// Validation Function
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.loginForm  =  this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  // Form controls
  get formControls(): any { return this.loginForm.controls; }
  // Function for login
  login(): void {
    this.isSubmitted = true;
    this.username = this.loginForm.value.username;
    this.email = this.loginForm.value.email;
    this.password = this.loginForm.value.password;
    if (this.loginForm.invalid) {
      return;
    }
    else {
      // Login Validation
      this.loginService.getUsers().subscribe((data: any ) => {
        this.users = data;
        for ( const val of data) {
          if (val.username === this.username && val.email === this.email && val.password === this.password) {
            this.loginService.login(this.loginForm.value);
            if (val.role === 'Admin'){
              localStorage.setItem('username', this.username);
              this.router.navigateByUrl('/main');
              this.message.add('OK');
            }
            if (val.role === 'User'){
              localStorage.setItem('username', this.username);
              this.router.navigateByUrl('/users');
              this.message.add('OK');
            }
          } else{
            this.msg = true;
          }
        }
      });
    }
  }
}

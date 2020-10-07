import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginUsersService} from '../service/loginUsers.service';
import { Router } from '@angular/router';
import {CommonService} from '../service/common.service';
import {validateRex} from '../../assets/validate-register';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(private loginService: LoginUsersService, private router: Router,
              private formBuilder: FormBuilder , private message: CommonService) { }
  formErrors = {
    username: '',
    password: '',
    email: ''
  };
  loginForm: FormGroup;
  username;
  email;
  password;
  msg = false;
  users: object;
  validationMessage = {
    username: {
      minlength: '用户名长度最少为3个字符', maxlength: '用户名长度最多为10个字符', required: '请填写用户名',
      notdown: '用户名不能以下划线开头', only: '用户名只能包含数字、字母、下划线'
    },
    password: {
      minlength: '密码长度最少为6个字符', maxlength: '密码长度最多为10个字符', required: '请填写用户密码',
      notdown: '用户密码不能以下划线开头', only: '用户密码只能包含数字、字母、下划线'
    },
    email: {
      minlength: '邮箱地址最少为6个字符', required: '请填写邮箱地址',
      notdown: '邮箱地址不能以下划线开头', only: '邮箱地址可以包含数字、字母、下划线'
    }
  };
  LoginComponent;
  ngOnInit(): void {
    this.loginForm  =  this.formBuilder.group({
      username: [''],
      email: [''],
      password: ['']
    });
    this.buildForm();
  }
  login(): void {
    this.username = this.loginForm.value.username;
    this.email = this.loginForm.value.email;
    this.password = this.loginForm.value.password;
    // Login Validation
    this.loginService.getUsers().subscribe((data: any ) => {
      this.users = data;
      for ( const val of data) {
        if (val.username === this.username && val.email === this.email && val.password === this.password) {
          this.loginService.login(this.loginForm.value);
          if (val.role === 'Admin'){
            localStorage.setItem('username', this.username);
            this.router.navigate(['/admin']).then(r =>  this.message.add(this.username));
          }
          if (val.role === 'User'){
            localStorage.setItem('username', this.username);
            this.router.navigate(['./main']).then(r => {});
          }
        } else{
          this.msg = true;
        }
      }
    });
  }
  buildForm(): void {

    // 通过 formBuilder构建表单

    this.loginForm = this.formBuilder.group({

      username: [ '', [

        Validators.required,

        Validators.maxLength(10),

        Validators.minLength(1),

        validateRex('notdown', /^(?!_)/),

        validateRex('only', /^[A-Za-z0-9_\-\u4e00-\u9fa5]+$/)

      ]],
      password: [ '', [

        Validators.required,

        Validators.maxLength(10),

        Validators.minLength(3),

        validateRex('notdown', /^(?!_)/),

        validateRex('only', /^[1-9a-zA-Z_]+$/)

      ]],
      email: [ '', [

        Validators.required,

        Validators.minLength(6),

        validateRex('notdown', /^(?!_)/),

        validateRex('only', /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/)

      ]]
    });



    // 每次表单数据发生变化的时候更新错误信息

    this.loginForm.valueChanges

      .subscribe(data => this.onValueChanged(data));



    // 初始化错误信息

    this.onValueChanged();

  }
  onValueChanged(data?: any): void {

    // 如果表单不存在则返回

    // 获取当前的表单

    const form = this.loginForm;
    // 遍历错误消息对象

    for (const field in this.formErrors) {

      // 清空当前的错误消息

      this.formErrors[field] = '';

      // 获取当前表单的控件

      const control = form.get(field);

      // 当前表单存在此空间控件 && 此控件没有被修改 && 此控件验证不通过

      if (control && control.dirty && !control.valid) {

        // 获取验证不通过的控件名，为了获取更详细的不通过信息

        const messages = this.validationMessage[field];

        // 遍历当前控件的错误对象，获取到验证不通过的属性

        // tslint:disable-next-line:forin
        for (const key in control.errors) {
          // 把所有验证不通过项的说明文字拼接成错误消息

          this.formErrors[field] += messages[key] + '\n';

        }

      }

    }
  }

}

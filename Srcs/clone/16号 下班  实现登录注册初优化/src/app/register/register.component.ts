import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { validateRex } from './validate-register';
import {DoUsersService} from '../service/doUsers.service';
import {Router} from '@angular/router';
import {timeInterval} from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  addUsers = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    sex: new FormControl(''),
    address: new FormControl(''),
    tNum: new FormControl(''),
    role: new FormControl('User'),
    password: new FormControl('')
  });

  alert: boolean;

  constructor(private service: DoUsersService, private router: Router) { }

  ngOnInit(): void {
  }

  get username(): any { return this.addUsers.get('username'); }
  get sex(): any { return this.addUsers.get('sex'); }
  get email(): any { return this.addUsers.get('email'); }
  get address(): any { return this.addUsers.get('address'); }
  get tNum(): any { return this.addUsers.get('tNum'); }
  get role(): any { return this.addUsers.get('role'); }
  get password(): any { return this.addUsers.get('password'); }



  onSubmit(): any {
    this.service.saveUsers(this.addUsers.value).subscribe((result) => {
      console.warn(result);
    });
    this.alert = true;
    this.addUsers.reset({});
    setTimeout('window.location.href = "http://localhost:4200/login";', 1500);
  }

  closeAlert(): any {
    this.alert = false;
  }


/*

  bothoter = false;
// 添加 fb 属性，用来创建表单
  constructor(private fb: FormBuilder) { }
// 定义表单
  registerForm: FormGroup;
// 表单验证不通过时显示的错误消息
  formErrors = {
    userid: '',
    password: ''
  };
// 为每一项表单验证添加说明文字
  validationMessage = {
    userid: {
      minlength: '用户名长度最少为3个字符', maxlength: '用户名长度最多为10个字符', required: '请填写用户名',
      notdown: '用户名不能以下划线开头', only: '用户名只能包含数字、字母、下划线'
    },
    password: {
      minlength: '密码长度最少为6个字符', maxlength: '密码长度最多为10个字符', required: '请填写用户密码',
      notdown: '用户密码不能以下划线开头', only: '用户密码只能包含数字、字母、下划线'
    }
  };
// 每次数据发生改变时触发此方法
  RegisterComponent;
  ngOnInit(): void {
    // 初始化时构建表单
    this.buildForm();
  }
// 构建表单方法

  buildForm(): void {

    // 通过 formBuilder构建表单

    this.registerForm = this.fb.group({

      /!* 为 username 添加3项验证规则：

      * 1.必填， 2.最大长度为10， 3.最小长度为3， 4.不能以下划线开头， 5.只能包含数字、字母、下划线

      * 其中第一个空字符串参数为表单的默认值

      *!/

      userid: [ '', [

        Validators.required,

        Validators.maxLength(10),

        Validators.minLength(3),

        validateRex('notdown', /^(?!_)/),

        validateRex('only', /^[1-9a-zA-Z_]+$/)

      ]],
      password: [ '', [

        Validators.required,

        Validators.maxLength(10),

        Validators.minLength(6),

        validateRex('notdown', /^(?!_)/),

        validateRex('only', /^[1-9a-zA-Z_]+$/)

      ]]

    });



    // 每次表单数据发生变化的时候更新错误信息

    this.registerForm.valueChanges

      .subscribe(data => this.onValueChanged(data));



    // 初始化错误信息

    this.onValueChanged();

  }
  onValueChanged(data?: any): void {

    // 如果表单不存在则返回

    if (!this.registerForm) {
      this.bothoter = true;
      return; }

    // 获取当前的表单

    const form = this.registerForm;
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

  }*/
}

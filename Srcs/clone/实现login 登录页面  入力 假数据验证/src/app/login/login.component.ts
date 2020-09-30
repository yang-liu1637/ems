import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {validateRex} from '../register/validate-register';
import {LoginUsersService} from '../service/loginUsers.service';
import {LoginUser} from '../models/loginUser.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // input 验证
  txtUNameIsInvalid = false;
  txtPWordIsInvalid = false;
  correctMessage = false;
  incorrectMessage = false;
  bothoter = false;
  // Model
  users: LoginUser[];
  title: any;
// 添加 fb 属性，用来创建表单
  constructor(private fb: FormBuilder , private userService: LoginUsersService) { }
// 定义表单
  loginForm: FormGroup;
// 表单验证不通过时显示的错误消息
  formErrors = {

    username: '',
    password: ''

  };
// 为每一项表单验证添加说明文字
  validationMessage = {

    username: {

      minlength: '用户名长度最少为3个字符',

      maxlength: '用户名长度最多为10个字符',

      required: '请填写用户名',

      notdown: '用户名不能以下划线开头',

      only: '用户名只能包含数字、字母、下划线'

    },
    password: {

      minlength: '密码长度最少为6个字符',

      maxlength: '密码长度最多为10个字符',

      required: '请填写用户密码',

      notdown: '用户密码不能以下划线开头',

      only: '用户密码只能包含数字、字母、下划线'

    }

  };

// 每次数据发生改变时触发此方法
loginComponent;
// tslint:disable-next-line:use-lifecycle-interface
 ngOnInit(): void {
    // 初始化时构建表单

    this.buildForm();

  }
// 构建表单方法
  buildForm(): void {

    // 通过 formBuilder构建表单

    this.loginForm = this.fb.group({
// 为 username 添加3项验证规则：1.必填， 2.最大长度为10， 3.最小长度为3， 4.不能以下划线开头， 5.只能包含数字、字母、下划线其中第一个空字符串参数为表单的默认值
      username: [ '', [

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

    this.loginForm.valueChanges

      .subscribe(data => this.onValueChanged(data));



    // 初始化错误信息

    this.onValueChanged();

  }
  onValueChanged(data?: any): void {
    // 如果表单不存在则返回
    if (!this.loginForm) { return; }
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
// 按submit button
checkUserInput(uName: string, pWord: string): void {
  // 订阅 subscribe
  this.userService.getUsers().subscribe((userData) => {
    // instantiate users with users from REST API
    this.users = userData;
    // Check if the userinput is not null
    if (uName !== '' && pWord !== '') {
      this.txtUNameIsInvalid = false;
      this.txtPWordIsInvalid = false;
      this.bothoter = false;
      // Check in users if the Users input is valid
      const inputToCompare = this.users.find(u => u.userId === uName && u.password === pWord);
      if (!inputToCompare) {
        this.correctMessage = false;
        this.incorrectMessage = true;
      } else {
        this.correctMessage = true;
        this.incorrectMessage = false;
      }
    }
    // If null
    else {
      // Check null
      if (uName === '') {
        this.txtUNameIsInvalid = true;
        this.correctMessage = false;
        this.incorrectMessage = false;
        this.bothoter = true;
      } else {
        this.txtUNameIsInvalid = false;
        this.correctMessage = false;
        this.incorrectMessage = false;
        this.bothoter = false;
      }
      if (pWord === '') {
        this.txtPWordIsInvalid = true;
        this.correctMessage = false;
        this.incorrectMessage = false;
        this.bothoter = true;
      } else {
        this.txtPWordIsInvalid = false;
        this.correctMessage = false;
        this.incorrectMessage = false;
        this.bothoter = false;
      }
    }
  });
}
}

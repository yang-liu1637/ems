import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DoUsersService} from '../../shared/service/doUsers.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private service: DoUsersService) { }
  // formControl 更新输入的表单信息
  get username(): any {
    return this.addUsers.get('username');
  }

  get sex(): any {
    return this.addUsers.get('sex');
  }

  get email(): any {
    return this.addUsers.get('email');
  }

  get address(): any {
    return this.addUsers.get('address');
  }

  get tNum(): any {
    return this.addUsers.get('tNum');
  }

  get role(): any {
    return this.addUsers.get('role');
  }

  get password(): any {
    return this.addUsers.get('password');
  }

  // 多选数组
  hobbies = [
    { id: 1, title: '电影', value: '电影' },
    { id: 2, title: '音乐', value: '音乐' },
    { id: 3, title: '登山', value: '登山' },
    { id: 4, title: '阅读', value: '阅读' },
    { id: 5, title: '游泳', value: '游泳' },
    { id: 6, title: '摄影', value: '摄影' },
    { id: 7, title: '绘画', value: '绘画' },
  ];
  // 建立新的FormGroup
  addUsers = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    sex: new FormControl(''),
    address: new FormControl(''),
    tNum: new FormControl(''),
    role: new FormControl(''),
    password: new FormControl(''),
    hobby: new FormControl('')
  });
  // 跳转提示
  alert: boolean;
  hobby: any;

  ngOnInit(): void {
  }

  onSubmit(): any {
    this.service.saveUsers(this.addUsers.value).subscribe((result) => {
      console.log(result);
      setTimeout('window.location.href = "http://localhost:4200/admin/list";', 1000);
    });
    this.alert = true;
    this.addUsers.reset({});
  }

}

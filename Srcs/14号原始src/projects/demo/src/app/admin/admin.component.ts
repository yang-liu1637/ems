import { Component, OnInit } from '@angular/core';
import {CommonService} from '../shared/service/common.service';
import {LoginUsersService} from '../login/service/loginUsers.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  // 管道时间
  today: Date = new Date();
  // 表单 username
  username: string[];
  constructor(private message: CommonService, private  loginUsersService: LoginUsersService , private router: Router) { }

  ngOnInit(): void {
    // 通过 login更新用户名
    this.message.getMessage().subscribe((result) => {
      this.username = result;
    });
  }
  logout(): any{
    this.loginUsersService.logout();
    this.router.navigateByUrl('');
  }
}

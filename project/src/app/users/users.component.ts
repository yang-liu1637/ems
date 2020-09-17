import { Component, OnInit } from '@angular/core';
import {LoginUsersService} from '../service/loginUsers.service';
import {Router} from '@angular/router';
import {CommonService} from '../service/common.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private loginUsersService: LoginUsersService, private router: Router , private message: CommonService) { }

  // Logout Function
  showMs = true;
  ngOnInit(): void {
    const b = this.message.getMessage();
    console.log('组件接收消息' + b);

  }
  logout(): any{
    this.loginUsersService.logout();
    this.router.navigateByUrl('/login');
  }

}

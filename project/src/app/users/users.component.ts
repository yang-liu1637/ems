import { Component, OnInit } from '@angular/core';
import {LoginUsersService} from '../service/loginUsers.service';
import {Router} from '@angular/router';
import {CommonService} from '../service/common.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  a = 'dwdwd';
  constructor(private loginUsersService: LoginUsersService, private router: Router , private message: CommonService) { }
  ngOnInit(): void {

  }
  // 登出
  logout(): any{
    this.loginUsersService.logout();
    this.router.navigateByUrl('/login');
  }

}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CommonService} from '../../assets/service/common.service';
import {LoginUsersService} from '../../assets/service/loginUsers.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  // 表单 username
  editUsers = new FormGroup({
    username: new FormControl('')
  });
  constructor(private message: CommonService, private  loginUsersService: LoginUsersService , private router: Router) { }

  ngOnInit(): void {
    // 通过 login更新用户名
    this.message.getMessage().subscribe((result) => {
      this.editUsers = new FormGroup({
        username: new FormControl(result),
      });
    });
  }
  logout(): any{
    this.loginUsersService.logout();
    this.router.navigateByUrl('');
  }
}

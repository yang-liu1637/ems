import { Component, OnInit } from '@angular/core';
import {LoginUsersService} from '../../assets/service/loginUsers.service';
import {Router} from '@angular/router';
import {CommonService} from '../../assets/service/common.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    username: string[];
constructor(private loginUsersService: LoginUsersService, private router: Router ,
            private message: CommonService) { }
  ngOnInit(): void {
  // 通过 login add（username）显示当前用户名
    // 通过 login更新用户名
    this.message.getMessage().subscribe((result) => {
      this.username = result;
    });
  }

}

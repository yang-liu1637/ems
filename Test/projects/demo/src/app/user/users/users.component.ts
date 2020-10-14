import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import { CommonService } from '../../shared/server/common.service';
import { LoginUsersService } from '../../login/service/loginUsers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { DoUsersService } from '../../shared/server/doUsers.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./css/users.component.scss']
})
export class UsersComponent implements OnInit {
  showUsers = new FormGroup({
    username: new FormControl(''),
    role: new FormControl(''),
    email: new FormControl(''),
    sex: new FormControl(''),
    address: new FormControl(''),
    tNum: new FormControl(''),
    password: new FormControl(''),
    hobby: new FormControl('')
  });

  get username(): any { return this.showUsers.get('username'); }
  get role(): any { return this.showUsers.get('role'); }
  get sex(): any { return this.showUsers.get('sex'); }
  get email(): any { return this.showUsers.get('email'); }
  get address(): any { return this.showUsers.get('address'); }
  get tNum(): any { return this.showUsers.get('tNum'); }
  get password(): any { return this.showUsers.get('password'); }
  get hobby(): any { return this.showUsers.get('password'); }

  constructor(private message: CommonService , private router: ActivatedRoute, private service: DoUsersService, private run: Router) { }

  userId: string[];


  ngOnInit(): void {
    this.message.getMessage().subscribe((result) => { // 通过 login更新ID
    this.userId = result;
  });
    this.service.getCurrentUsers(this.userId).subscribe((result) => { // 通过id把相应的users信息显示在update表单
      this.showUsers = new FormGroup({
        username: new FormControl(result.username),
        role: new FormControl(result.role),
        sex: new FormControl(result.sex),
        email: new FormControl(result.email),
        address: new FormControl(result.address),
        tNum: new FormControl(result.tNum),
        password: new FormControl(result.password),
        hobby: new FormControl(result.hobby)
      });
    });
    }


}

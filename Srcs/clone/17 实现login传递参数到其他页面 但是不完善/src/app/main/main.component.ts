import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {LoginUsersService} from '../service/loginUsers.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DoUsersService} from '../service/doUsers.service';
import {FormControl, FormGroup} from '@angular/forms';
import {CommonService} from '../service/common.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  arr: Observable<string[]>;
  editUsers = new FormGroup({
    username: new FormControl('')
  });

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
 constructor(private loginUsersService: LoginUsersService, private router: Router ,
             private routerr: ActivatedRoute, private service: DoUsersService, private message: CommonService) { }

  ngOnInit(): void {
    this.arr = this.message.getMessage();
    console.log(this.arr);
// 通过 login更新用户名
    this.message.getMessage().subscribe((result) => {
      this.editUsers = new FormGroup({
        username: new FormControl(result),
      });
    });
  }
  // 读取当前用户
  userForm(): any {
    this.service.updateUsers(this.routerr.snapshot.params.id, this.editUsers.value).subscribe((result) => {
      console.log(result);
    });
  }
  // 登出
  logout(): any{
    this.loginUsersService.logout();
    this.router.navigateByUrl('/login');
  }
}

import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {LoginUsersService} from '../../assets/service/loginUsers.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DoUsersService} from '../../assets/service/doUsers.service';
import {FormControl, FormGroup} from '@angular/forms';
import {CommonService} from '../../assets/service/common.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
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
// 通过 login add（username）显示当前用户名
    this.message.getMessage().subscribe((result) => {
      this.editUsers = new FormGroup({
        username: new FormControl(result),
      });
    });
  }
  // 登出
  logout(): any{
    this.loginUsersService.logout();
    this.router.navigateByUrl('/login');
  }
}


import { Component, OnInit } from '@angular/core';
import {LoginUsersService} from '../../../login/service/loginUsers.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-nav',
  templateUrl: './log-nav.component.html',
  styleUrls: ['./css/log-nav.component.scss']
})
export class LogNavComponent implements OnInit {
  constructor(private loginUsersService: LoginUsersService , private router: Router) { }

  ngOnInit(): void {
  }
  logout(): any {
    this.loginUsersService.logout();
    this.router.navigateByUrl('');
  }
}

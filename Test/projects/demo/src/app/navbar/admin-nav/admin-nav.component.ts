import { Component, OnInit } from '@angular/core';
import {LoginUsersService} from '../../login/service/loginUsers.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.scss']
})
export class AdminNavComponent implements OnInit {

  constructor(private  loginUsersService: LoginUsersService , private router: Router) { }

  ngOnInit(): void {
  }
  logout(): any{
    this.loginUsersService.logout();
    this.router.navigateByUrl('');
  }
}

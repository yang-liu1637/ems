import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {LoginUsersService} from '../service/loginUsers.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
 constructor(private loginUsersService: LoginUsersService, private router: Router) { }
  ngOnInit(): void {
  }
  // Logout Function
  logout(): any{
    this.loginUsersService.logout();
    this.router.navigateByUrl('/login');
  }
}

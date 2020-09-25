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
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  username: string[];
  constructor(private message: CommonService, private  loginUsersService: LoginUsersService , private router: Router) { }

  ngOnInit(): void {
    this.message.getMessage().subscribe((result) => {
      this.username = result;
     /* setTimeout('window.location.reload();', 0);*/
    });
  }
}


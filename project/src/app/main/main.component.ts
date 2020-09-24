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
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

 constructor() { }

  ngOnInit(): void {

  }

}


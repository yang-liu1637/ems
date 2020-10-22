import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


import {DoUsersService} from '../service/doUsers.service';
import {Router} from '@angular/router';
import {validateRex} from '../validate-register';
import { LoginUsersService } from '../service/loginUsers.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}

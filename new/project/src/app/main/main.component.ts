import { Component, OnInit } from '@angular/core';
import {DoUsersService} from '../service/doUsers.service';
import {MainUsersService} from '../service/mainUsers.service';





@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  collection: any = [];

  constructor(private users: MainUsersService) { }

  ngOnInit(): void {
    this.users.getList().subscribe((result) => {
      // 订阅server里面的list
      this.collection = result;
    });
  }
}


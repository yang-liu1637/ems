import { Component, OnInit } from '@angular/core';
import {DoUsersService} from '../../shared/service/doUsers.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  collection: any = [];
  alert = true;
  text: any;

  constructor(private users: DoUsersService) { }

  ngOnInit(): void {
    this.users.getList().subscribe((result) => {
      // 订阅server里面的list
      this.collection = result;
      console.log(this.collection);
    });
  }

  deleteUsers(item): void {
    this.collection.splice(item - 1, 1);
    this.users.deleteUsers(item).subscribe((result) => {
      console.log(result);
    });
  }
}



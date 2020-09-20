import { Component, OnInit } from '@angular/core';
import {DoUsersService} from '../../../assets/service/doUsers.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  collection: any = [];

  constructor(private users: DoUsersService) { }

  ngOnInit(): void {
    this.users.getList().subscribe((result) => {
      this.collection = result;
    });
  }

  deleteUsers(item): void {
    this.collection.splice(item - 1, 1);
    this.users.deleteUsers(item).subscribe((result) => {
      console.log(result);
    });
  }

}


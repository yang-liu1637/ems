import { Component, OnInit } from '@angular/core';
import { DoUsersService } from '../service/doUsers.service';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

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
      console.warn(result);
    });
  }

}

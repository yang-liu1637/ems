import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./css/users.component.scss']
})
export class UsersComponent implements OnInit {
  userId: string[];

  constructor() {}

  ngOnInit(): void {
    }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./css/users.component.scss']
})
export class UsersComponent implements OnInit {
  userId: string[];
  time: Date | null = null;
  log(time: Date): void {
    console.log(time && time.toTimeString());
  }
  constructor() {}

  ngOnInit(): void {
    }

}

import { Component, OnInit } from '@angular/core';
import {SendmessageService} from '../shared/service/sendmessage.service';
import {LoginUsersService} from '../shared/service/loginUsers.service';
import {Router} from '@angular/router';

interface DataItem {
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  searchValue = '';
  visible = false;

  listOfData: DataItem[] = [];
  listOfDisplayData = [...this.listOfData];
  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.listOfData.push({
        name: `Edward King ${i}`,
        age: 32,
        address: `London`
      });
    }
  }
  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item: DataItem) => item.name.indexOf(this.searchValue) !== -1);
  }
}

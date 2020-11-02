import { Component, OnInit } from '@angular/core';
import {DoUsersService} from '../../shared/service/doUsers.service';
import {FilterPipe} from '../../filter.pipe';
import {pipe} from 'rxjs';
interface DataItem {
  id: number;
  username: string;
  role: string;
  sex: string;
  email: string;
  password: number;
  address: string;
  tNum: number;
  hobby: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  alert = true;
  constructor(private users: DoUsersService) { }
  searchValue = '';
  visible: boolean;
  listOfData: DataItem[] = [];
  listOfDisplayData = [...this.listOfData];
  co: any[] = [];
  ngOnInit(): void {
    this.searchValue = '';
    this.users.getList().subscribe((result) => {
      // 订阅server里面的list
      this.co = result;
      console.log(result);
    });
  }
  deleteUsers(item): void {
    this.listOfDisplayData.splice(item - 1, 1);
    this.users.deleteUsers(item).subscribe((result) => {
      console.log(result);
    });
  }
    show(): void {
      this.searchValue = '';
      this.search();
    }
  reset(): void {
    this.searchValue = '';
    this.search();
  }
  search(): void {
    this.listOfData = this.co;
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item: DataItem) => item.username.indexOf(this.searchValue) !== -1);
  }
}



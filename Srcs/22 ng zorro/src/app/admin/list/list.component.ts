import { Component, OnInit } from '@angular/core';
import {DoUsersService} from '../../shared/service/doUsers.service';
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
  reset(): void {
    this.searchValue = '';
    this.search();
  }
  search(): void {
    for (const i of this.co) {
      this.listOfData.push({
        id: i.id,
        username: `${i.username}`,
        role: `${i.role}`,
        sex: `${i.sex}`,
        email: `${i.email}`,
        password: i.password,
        address: `${i.address}`,
        tNum: i.tNum,
        hobby: `${i.hobby}`
      });
      console.log(i.username);
    }
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item: DataItem) => item.username.indexOf(this.searchValue) !== -1);
  }
}



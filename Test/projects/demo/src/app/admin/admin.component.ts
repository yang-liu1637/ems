import { Component, OnInit } from '@angular/core';
import {SendmessageService} from '../shared/service/sendmessage.service';
import {LoginUsersService} from '../shared/service/loginUsers.service';
import {Router} from '@angular/router';
interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      key: '4',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '5',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '6',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

} /*implements OnInit {
  // 管道时间
  today: Date = new Date();
  // 表单 username
  username: string[];
  constructor(private message: SendmessageService, private  loginUsersService: LoginUsersService , private router: Router) { }

  ngOnInit(): void {
    // 通过 login更新用户名
    this.message.getMessage().subscribe((result) => {
      this.username = result;
    });
  }
  logout(): any{
    this.loginUsersService.logout();
    this.router.navigateByUrl('');
  }
}*/

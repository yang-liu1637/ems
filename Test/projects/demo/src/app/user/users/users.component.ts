import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../../shared/service/common.service';
import { DoUsersService } from '../../shared/service/doUsers.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./css/users.component.scss']
})
export class UsersComponent implements OnInit {
  showUsers = new FormGroup({
    username: new FormControl(''),
    role: new FormControl(''),
    email: new FormControl(''),
    sex: new FormControl(''),
    address: new FormControl(''),
    tNum: new FormControl(''),
    password: new FormControl(''),
    hobby: new FormControl('')
  });
  constructor(private message: CommonService ,
              private router: ActivatedRoute,
              private service: DoUsersService) {}

  userId: string[];

  ngOnInit(): void {
    this.message.getMessage().subscribe((result) => { // 通过 login更新ID
    this.userId = result;
  });
    this.service.getCurrentUsers(this.userId).subscribe((result) => { // 通过id把相应的users信息显示在表单
      this.showUsers = new FormGroup({
        username: new FormControl(result.username),
        role: new FormControl(result.role),
        sex: new FormControl(result.sex),
        email: new FormControl(result.email),
        address: new FormControl(result.address),
        tNum: new FormControl(result.tNum),
        password: new FormControl(result.password),
        hobby: new FormControl(result.hobby)
      });
    });
    }

}

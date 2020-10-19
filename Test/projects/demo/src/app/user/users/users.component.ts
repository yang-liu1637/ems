import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { SendmessageService } from '../../shared/service/sendmessage.service';
import { DoUsersService } from '../../shared/service/doUsers.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./css/users.component.scss']
})
export class UsersComponent implements OnInit {
  userId: string[];
  showUsers: any = [];
  constructor(private message: SendmessageService ,
              private router: ActivatedRoute,
              private service: DoUsersService) {}

  ngOnInit(): void {
    this.message.getMessage().subscribe((result) => { // 通过 login更新ID
    this.userId = result;
  });
    this.service.getCurrentUsers(this.userId).subscribe((result) => { // 通过id把相应的users信息显示在表单
      this.showUsers = result;
      });
    }

}

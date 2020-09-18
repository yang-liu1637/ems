import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DoUsersService} from '../../../assets/service/doUsers.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  addUsers = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    sex: new FormControl(''),
    address: new FormControl(''),
    tNum: new FormControl(''),
    role: new FormControl(''),
    password: new FormControl('')
  });

  alert: boolean;

  constructor(private service: DoUsersService) { }

  ngOnInit(): void {
  }

  get username(): any { return this.addUsers.get('username'); }
  get sex(): any { return this.addUsers.get('sex'); }
  get email(): any { return this.addUsers.get('email'); }
  get address(): any { return this.addUsers.get('address'); }
  get tNum(): any { return this.addUsers.get('tNum'); }
  get role(): any { return this.addUsers.get('role'); }
  get password(): any { return this.addUsers.get('password'); }



  onSubmit(): any {
    this.service.saveUsers(this.addUsers.value).subscribe((result) => {
      console.log(result);
    });
    this.alert = true;
    this.addUsers.reset({});
    setTimeout('window.location.href = "http://localhost:4200/admin/list";', 1500);
  }

  closeAlert(): any {
    this.alert = false;
  }
}

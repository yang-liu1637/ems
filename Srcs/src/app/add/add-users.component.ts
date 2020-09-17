import { Component, OnInit } from '@angular/core';
import { DoUsersService } from '../service/doUsers.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

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
  }

  closeAlert(): any {
    this.alert = false;
  }
}

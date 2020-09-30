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
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    tNum: new FormControl('')
  });

  alert: boolean;

  constructor(private service: DoUsersService) { }

  ngOnInit(): void {
  }

  get name(): any { return this.addUsers.get('name'); }
  get email(): any { return this.addUsers.get('email'); }
  get address(): any { return this.addUsers.get('address'); }
  get tNum(): any { return this.addUsers.get('tNum'); }

  onSubmit(): any {
    this.service.saveUsers(this.addUsers.value).subscribe((result) => {
      console.warn(result);
    });
    this.alert = true;
    this.addUsers.reset({});
  }

  closeAlert(): any {
    this.alert = false;
  }
}

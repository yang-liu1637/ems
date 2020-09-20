import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DoUsersService} from '../../../assets/service/doUsers.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  alert = false;

  editUsers = new FormGroup({
    username: new FormControl(''),
    role: new FormControl(''),
    email: new FormControl(''),
    sex: new FormControl(''),
    address: new FormControl(''),
    tNum: new FormControl(''),
    password: new FormControl('')
  });


  get username(): any { return this.editUsers.get('username'); }
  get role(): any { return this.editUsers.get('role'); }
  get sex(): any { return this.editUsers.get('sex'); }
  get email(): any { return this.editUsers.get('email'); }
  get address(): any { return this.editUsers.get('address'); }
  get tNum(): any { return this.editUsers.get('tNum'); }
  get password(): any { return this.editUsers.get('password'); }
  constructor(private router: ActivatedRoute, private service: DoUsersService) { }

  ngOnInit(): void {
    this.service.getCurrentUsers(this.router.snapshot.params.id).subscribe((result) => {
      this.editUsers = new FormGroup({
        username: new FormControl(result.username),
        role: new FormControl(result.role),
        sex: new FormControl(result.sex),
        email: new FormControl(result.email),
        address: new FormControl(result.address),
        tNum: new FormControl(result.tNum),
        password: new FormControl(result.password)
      });
    });
  }

  onUpdate(): any {
    this.service.updateUsers(this.router.snapshot.params.id, this.editUsers.value).subscribe((result) => {
      console.log(result);
    });
    this.alert = true;
  }

  closeAlert(): any {
    this.alert = false;
  }

}
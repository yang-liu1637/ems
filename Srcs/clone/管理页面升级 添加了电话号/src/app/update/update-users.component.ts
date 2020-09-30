import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DoUsersService } from '../service/doUsers.service';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.css']
})
export class UpdateUsersComponent implements OnInit{

  alert = false;

  editUsers = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  });

  get name(): any { return this.editUsers.get('name'); }
  get email(): any { return this.editUsers.get('email'); }
  get address(): any { return this.editUsers.get('address'); }

  constructor(private router: ActivatedRoute, private service: DoUsersService) { }

  ngOnInit(): void {
    this.service.getCurrentUsers(this.router.snapshot.params.id).subscribe((result) => {
      this.editUsers = new FormGroup({
        name: new FormControl(result.name),
        email: new FormControl(result.email),
        address: new FormControl(result.address)
      });
    });
  }

  onUpdate(): any {
    this.service.updateUsers(this.router.snapshot.params.id, this.editUsers.value).subscribe((result) => {
      console.warn(result);
    });
    this.alert = true;
  }

  closeAlert(): any {
    this.alert = false;
  }

}

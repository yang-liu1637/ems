import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {LoginUsersService} from '../service/loginUsers.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DoUsersService} from '../service/doUsers.service';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  editUsers = new FormGroup({
    username: new FormControl('')
  });

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
 constructor(private loginUsersService: LoginUsersService, private router: Router ,
             private routerr: ActivatedRoute, private service: DoUsersService) { }
  ngOnInit(): void {
    this.service.getCurrentUsers(this.routerr.snapshot.params.id).subscribe((result) => {
      this.editUsers = new FormGroup({
        username: new FormControl(result.username),
      });
    });
  }
  onUpdate(): any {
    this.service.updateUsers(this.routerr.snapshot.params.id, this.editUsers.value).subscribe((result) => {
      console.log(result);
    });
  }
  // Logout Function
  logout(): any{
    this.loginUsersService.logout();
    this.router.navigateByUrl('/login');
  }
}

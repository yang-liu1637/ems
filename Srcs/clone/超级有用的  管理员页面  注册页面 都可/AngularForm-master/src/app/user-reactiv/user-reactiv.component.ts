import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../dto/user';
import {UserService} from '../service/user-service';
import {phoneNumberValidator} from '../phone-validators';

@Component({
  selector: 'app-user-reactiv',
  templateUrl: './user-reactiv.component.html',
  styleUrls: ['./user-reactiv.component.css']
})
export class UserReactivComponent implements OnInit {
  submittedForm: FormGroup;
  private company: any;
  private users: User[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getCompany().subscribe(
      (company) => this.company = company,
      (error) => console.log(error));

    this.submittedForm = new FormGroup({
      userId: new FormControl(null),
      email: new FormControl(null, [Validators.required, Validators.email]),
      firstName: new FormControl(null),
      lastName: new FormControl(null, Validators.required),
      company: new FormControl(null),
      mobilePhone: new FormControl(null, [Validators.required, phoneNumberValidator]),
      officePhone: new FormControl(null, [Validators.required, phoneNumberValidator]),
      address: new FormControl(null)
    });
  }

  onSubmit() {
    const user: User = User.getBlankUser();
    user.userId = this.submittedForm.controls.userId.value;
    user.email = this.submittedForm.controls.email.value;
    user.firstName = this.submittedForm.controls.firstName.value;
    user.lastName = this.submittedForm.controls.lastName.value;
    user.company = this.submittedForm.controls.company.value;
    user.mobilePhone = this.submittedForm.controls.mobilePhone.value;
    user.officePhone = this.submittedForm.controls.officePhone.value;
    user.address = this.submittedForm.controls.address.value;

    this.userService.createUser(user).subscribe(
      (response) => {
        this.users.push(response);
        console.log(this.users);
      });

    this.submittedForm.reset();
  }
}

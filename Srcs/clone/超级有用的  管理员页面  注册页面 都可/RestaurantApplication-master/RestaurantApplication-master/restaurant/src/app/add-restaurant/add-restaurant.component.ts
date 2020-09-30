import { Component, OnInit } from '@angular/core';
import { RestaurantService } from "../restaurant.service";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  addRestaurant = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  })

  alert: boolean = false;

  constructor(private service: RestaurantService) { }

  ngOnInit(): void {
  }

  get name() { return this.addRestaurant.get('name') };
  get email() { return this.addRestaurant.get('email') };
  get address() { return this.addRestaurant.get('address') };

  onSubmit() {
    this.service.saveRestaurant(this.addRestaurant.value).subscribe((result) => {
      console.warn(result)
    })
    this.alert = true;
    this.addRestaurant.reset({});
  }

  closeAlert() {
    this.alert = false;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { RestaurantService } from "../restaurant.service";

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {

  alert:boolean = false;

  editRestaurant = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  })

  get name() { return this.editRestaurant.get('name') };
  get email() { return this.editRestaurant.get('email') };
  get address() { return this.editRestaurant.get('address') };

  constructor(private router: ActivatedRoute, private service: RestaurantService) { }

  ngOnInit(): void {
    this.service.getCurrentRestaurant(this.router.snapshot.params.id).subscribe((result) => {
      this.editRestaurant = new FormGroup({
        name: new FormControl(result['name']),
        email: new FormControl(result['email']),
        address: new FormControl(result['address'])
      })
    })
  }

  onUpdate(){
    this.service.updateRestaurant(this.router.snapshot.params.id, this.editRestaurant.value).subscribe((result)=>{
      console.warn(result)
    })
    this.alert=true
  }

  closeAlert(){
    this.alert=false
  }

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { UpdateRestaurantComponent } from "./update-restaurant/update-restaurant.component";
import { ListRestaurantComponent } from "./list-restaurant/list-restaurant.component";

const routes: Routes = [
  {
    component: AddRestaurantComponent,
    path: 'add'
  },
  {
    component: UpdateRestaurantComponent,
    path: 'update/:id'
  },
  {
    component: ListRestaurantComponent,
    path: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

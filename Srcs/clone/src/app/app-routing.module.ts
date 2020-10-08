import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUsersComponent } from './add/add-users.component';
import { UpdateUsersComponent } from './update/update-users.component';
import { ListUsersComponent } from './list/list-users.component';

const routes: Routes = [
  {
    component: AddUsersComponent,
    path: 'add'
  },
  {
    component: UpdateUsersComponent,
    path: 'update/:id'
  },
  {
    component: ListUsersComponent,
    path: ''
  },
  {
    component: ListUsersComponent,
    path: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

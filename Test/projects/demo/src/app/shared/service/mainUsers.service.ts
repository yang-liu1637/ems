import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainUsersService {

  private url: string = environment.baseUrl + 'userList';

  constructor(private http: HttpClient) {
  }

  getList(): any {
    return this.http.get(this.url);
  }
  update(id, data): any {
    return this.http.put(`${this.url}/${id}`, data);
  }
}

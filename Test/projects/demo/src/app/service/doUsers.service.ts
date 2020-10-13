// user admin注册 增删改操作
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoUsersService {

  private url: string = environment.baseUrl + 'users';


  constructor(private http: HttpClient) { }

  getList(): any {
    return this.http.get(this.url);
  }

  saveUsers(data): any {
    return this.http.post(this.url, data);
  }

  deleteUsers(id): any {
    return this.http.delete(`${this.url}/${id}`);
  }

  getCurrentUsers(id): any {
    return this.http.get(`${this.url}/${id}`);
  }

  updateUsers(id, data): any {
    return this.http.put(`${this.url}/${id}`, data);
  }
}

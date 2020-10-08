import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoUsersService {

  url = 'http://localhost:3000/users';

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

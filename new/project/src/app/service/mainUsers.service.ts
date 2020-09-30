import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainUsersService {

  url = 'http://localhost:3000/userList';

  constructor(private http: HttpClient) {
  }

  getList(): any {
    return this.http.get(this.url);
  }
}

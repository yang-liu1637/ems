import { Injectable } from '@angular/core';
import { User } from './user';
import {HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // tslint:disable-next-line:variable-name
  private  _userInfo: User;
  constructor(private httpClient: HttpClient, private router: Router) { }
  public login(userInfo: User): void{
    this._userInfo = userInfo;
    localStorage.setItem('ACCESS_TOKEN', 'access_token');
  }
// Return to login page
  public isLoggedIn(): boolean{
    if (localStorage.getItem('username') == null)
    {
      this.router.navigateByUrl('/login');
    }
    return localStorage.getItem('username') !== null;
    }
  // Logout
  public logout(): void{
    localStorage.removeItem('username');
  }
  // Authentication
  getusers(): Observable<any>{
    return this.httpClient.get('http://localhost:3000/users');
  }
}


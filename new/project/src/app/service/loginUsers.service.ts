// login
import { Injectable } from '@angular/core';
import { LoginUser } from './models/loginUser.model';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable(
  {
    providedIn: 'root'
  }
)

export class LoginUsersService {
  private userInfo: LoginUser;
  constructor(private httpClient: HttpClient, private router: Router ){
  }
  public login(userInfo: LoginUser): void{
    this.userInfo = userInfo;
    localStorage.setItem('ACCESS_TOKEN', 'access_token');
  }

  getUsers(): Observable<LoginUser[]>{
    return this.httpClient.get<LoginUser[]>('http://localhost:3000/users'); }
// login
  public isLoggedIn(): boolean{
    if (localStorage.getItem('username') == null)
    {
      alert('请先登录');
      this.router.navigateByUrl('/login');
    }
    return localStorage.getItem('username') !== null;
  }
  // Logout
  public logout(): void{
    localStorage.removeItem('username');
    console.log('已登出');
  }
}

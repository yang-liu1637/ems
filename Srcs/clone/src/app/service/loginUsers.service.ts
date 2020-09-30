import { Injectable } from '@angular/core';
import { LoginUser } from '../models/loginUser.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs/internal/Observable/throwError';
import {Router} from '@angular/router';


@Injectable(
  {
    providedIn: 'root'
  }
)

export class LoginUsersService {

  constructor(private httpClient: HttpClient, private router: Router ){
  }
  baseUrl = 'http://localhost:3000/users';

  getUsers(): Observable<LoginUser[]>{
    return this.httpClient.get<LoginUser[]>(this.baseUrl);
  }

  public login(userInfo: LoginUser): void{
    localStorage.setItem('ACCESS_TOKEN', 'access_token');
  }
  // Logout
  public logout(): void{
    localStorage.removeItem('username');
  }
}

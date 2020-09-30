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
  private userInfo: LoginUser;
  constructor(private httpClient: HttpClient, private router: Router ){
  }
  public login(userInfo: LoginUser): void{
    this.userInfo = userInfo;
    localStorage.setItem('ACCESS_TOKEN', 'access_token');
  }

// REST - GET
        getUsers(): Observable<LoginUser[]>{
            return this.httpClient.get<LoginUser[]>('http://localhost:3000/users').pipe(catchError(this.handleError));
        }
        handleError(errorResponse: HttpErrorResponse): Observable<never>{
          if (errorResponse.error instanceof ErrorEvent){
            console.error('Client Side Error', errorResponse.error.message);
          }
          else {
            console.error('Server Side Error', errorResponse);
          }
          return throwError('There is a problem with the service.Please Try again Later ');
        }
        /*postCheck():Observable*/
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
}

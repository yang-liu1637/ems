import { Injectable } from '@angular/core';
import { Login } from './models/login.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs/internal/Observable/throwError';

@Injectable()

export class UserService {

  constructor(private httpClient: HttpClient){
  }

  // assuming the json-server will run in this port
  // json-server 假数据
  baseUrl = 'http://localhost:3000/users';

        // Handels Error
// REST - GET
        getUsers(): Observable<Login[]>{
            return this.httpClient.get<Login[]>(this.baseUrl).pipe(catchError(this.handleError));
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
}

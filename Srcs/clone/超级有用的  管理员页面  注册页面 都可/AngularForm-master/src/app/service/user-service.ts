import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../dto/user';
import {Observable} from 'rxjs';


@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) {
  }


  getUsers(userId: number): Observable<User[]> {
    const header = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get<User[]>(`http://localhost:3000/users/${userId}` , {headers: header});
  }

  getCompany() {
    const header = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(`http://localhost:3000/company` , {headers: header});
  }

  createUser(user: User): Observable<User> {
    const header = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post<User>('http://localhost:3000/users', user, {headers: header});
  }


  //deleteUser(user: User): Observable<User> {
  //const header = new HttpHeaders({'Content-Type': 'application/json'});
  //return this.httpClient.delete<User>(`/api/user/${user}`, {headers: header});
  // }

  editUser(user: User): Observable<User> {
    const header = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put<User>('/api/user/', user,{headers: header});
  }
}

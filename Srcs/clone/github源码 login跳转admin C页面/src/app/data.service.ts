import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) { }
  // Fetching data from json
  getUsers(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/details');
  }
}

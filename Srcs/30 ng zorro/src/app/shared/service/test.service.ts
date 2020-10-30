import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private url: string = environment.baseUrl + 'loading';


  constructor(private http: HttpClient) { }

  getList(): any {
    return this.http.get(this.url);
  }
}

import { Injectable } from '@angular/core';

import {Observable, of, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  messages: string[] = [];

  add(message: string): void {
    console.log(message);
    this.messages.push(message);
  }

  getMessage(): Observable<string[]> {
    return of(this.messages);
  }

}

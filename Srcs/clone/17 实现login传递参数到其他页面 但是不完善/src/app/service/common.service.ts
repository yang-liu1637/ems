import { Injectable } from '@angular/core';

import {Observable, of, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  messages: string[] = [];
  // Observable string sources
  private missionAnnouncedSource = new Subject<string>();

  // Observable string streams
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();

  add(message: string): void {
    console.log(message);
    this.messages.push(message);
  }

  getMessage(): Observable<string[]> {
    return of(this.messages);
  }

  // Service message commands
  announceMission(mission: string): void {
    this.missionAnnouncedSource.next(mission);
  }

}

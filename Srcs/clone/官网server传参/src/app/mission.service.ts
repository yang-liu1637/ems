import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MissionService {

  // Observable string sources
  private missionAnnouncedSource = new Subject<string>();

  // Observable string streams
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  // Service message commands
  announceMission(mission: string): void {
    this.missionAnnouncedSource.next(mission);
  }
}

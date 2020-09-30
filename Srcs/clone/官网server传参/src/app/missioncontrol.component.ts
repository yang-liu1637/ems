import { Component } from '@angular/core';

import { MissionService } from './mission.service';

@Component({
  selector: 'app-mission-control',
  template: `
    <h2>任务控制</h2>
    <button (click)="announce()">宣布任务</button>
    <app-astronaut *ngFor="let astronaut of astronauts"
      [astronaut]="astronaut">
    </app-astronaut>
  `,
  providers: [MissionService]
})
export class MissionControlComponent {
  astronauts = ['Lovell'];
  history: string[] = [];
  missions = ['Fly to the moon!'];
  nextMission = true;

  constructor(private missionService: MissionService) {
  }

  announce(): void {
    if (this.nextMission === true){
    const mission = this.missions[0];
    this.missionService.announceMission(mission);
  }
  }
}

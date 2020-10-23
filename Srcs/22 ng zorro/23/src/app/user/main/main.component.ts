import {Component, EventEmitter, Input, OnInit} from '@angular/core';






@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isCollapsed = false;
  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
  ngOnInit(): void {
  }
  array = [1, 2, 3, 4];
}

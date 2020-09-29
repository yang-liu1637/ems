import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  src: string;

  constructor() { }

  ngOnInit(): void {
    this.src = 'assets/images/main/users.jpg' ;
  }
}


import { Component, OnInit } from '@angular/core';


import {CommonService} from '../service/common.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  username: string[];
  constructor(private message: CommonService) { }

  ngOnInit(): void {
    this.message.getMessage().subscribe((result) => {
      this.username = result;
     /* setTimeout('window.location.reload();', 0);*/
    });
  }
}


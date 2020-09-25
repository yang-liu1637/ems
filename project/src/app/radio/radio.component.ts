import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {
  constructor() { }

  public value = '2';

  public fg: FormGroup;

  ngOnInit(): void {
    this.backGoup();
  }
  backGoup(): void {
    this.fg = new FormGroup(
      {
        sex: new FormControl(this.value)
      }
    );
  }
  run(): void {
    // TypeScript里的解构形式
    // 未取出key 为sex的value值
    const {sex} = this.fg.value;
    console.log(sex);
  }

}

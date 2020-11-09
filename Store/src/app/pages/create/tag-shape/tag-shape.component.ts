// src/app/pages/create/tag-shape/tag-shape.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tag-shape',
  templateUrl: './tag-shape.component.html',
  styleUrls: ['./tag-shape.component.scss']
})
export class TagShapeComponent {
  tagShape: string;
  @Output() selectShapeEvent = new EventEmitter();

  constructor() { }

  selectShape(shape: string): any{
    this.selectShapeEvent.emit(shape);
  }

}

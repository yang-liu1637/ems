// src/app/pages/create/tag-text/tag-text.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tag-text',
  templateUrl: './tag-text.component.html',
  styleUrls: ['./tag-text.component.scss']
})
export class TagTextComponent {
  tagTextInput = '';
  fontType = 'sans-serif';
  @Output() selectFontEvent = new EventEmitter;
  @Output() addTextEvent = new EventEmitter;

  constructor() { }

  selectFont(fontType: string): void{
    this.selectFontEvent.emit(fontType);
  }

  addText(text: string): void{
    this.addTextEvent.emit(text);
  }

}

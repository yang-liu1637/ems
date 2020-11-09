import {Component, NgModule, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {PetTag} from '../../core/pet-tag.model';
import {Store, StoreModule} from '@ngrx/store';
import {ADD_TEXT, COMPLETE, SELECT_FONT, SELECT_SHAPE, TOGGLE_CLIP, TOGGLE_GEMS} from '../../core/pet-tag.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
/*export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/
export class CreateComponent implements OnInit, OnDestroy {
  tagState$: Observable<PetTag>;
  private tagStateSubscription: Subscription;
  petTag: PetTag;
  done = false;

  constructor(private store: Store<PetTag>) {
  }

  ngOnInit(): void {
    this.tagStateSubscription = this.tagState$.subscribe((state) => {
      this.petTag = state;
      this.done = !!(this.petTag.shape && this.petTag.text);
    });
  }

  ngOnDestroy(): void {
    this.tagStateSubscription.unsubscribe();
  }

  selectShapeHandler(shape: string): void {
    this.store.dispatch({
      type: SELECT_SHAPE,
      payload: shape
    });
  }

  selectFontHandler(fontType: string): void{
    this.store.dispatch({
      type: SELECT_FONT,
      payload: fontType
    });
  }

  addTextHandler(text: string): void{
    this.store.dispatch({
      type: ADD_TEXT,
      payload: text
    });
  }

  toggleClipHandler(): void{
    this.store.dispatch({
      type: TOGGLE_CLIP
    });
  }

  toggleGemsHandler(): void{
    this.store.dispatch({
      type: TOGGLE_GEMS
    });
  }

  submit(): void{
    this.store.dispatch({
      type: COMPLETE,
      payload: true
    });
  }

}

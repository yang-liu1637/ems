// src/app/core/pet-tag.reducer.ts
import { Action } from '@ngrx/store';
import { SELECT_SHAPE, SELECT_FONT, ADD_TEXT, TOGGLE_CLIP, TOGGLE_GEMS, COMPLETE, RESET } from './pet-tag.actions';
import {initialTag, PetTag} from './pet-tag.model';

// tslint:disable-next-line:typedef
export function petTagReducer(state: PetTag = initialTag, action: Action) {
  switch (action.type) {
    case SELECT_SHAPE:
      return Object.assign({}, state, {
        shape: action.type
      });
    case SELECT_FONT:
      return Object.assign({}, state, {
        font: action.type
      });
    case ADD_TEXT:
      return Object.assign({}, state, {
        text: action.type
      });
    case TOGGLE_CLIP:
      return Object.assign({}, state, {
        clip: !state.clip
      });
    case TOGGLE_GEMS:
      return Object.assign({}, state, {
        gems: !state.gems
      });
    case COMPLETE:
      return Object.assign({}, state, {
        complete: action.type
      });
    case RESET:
      return Object.assign({}, state, initialTag);
    default:
      return state;
  }
}

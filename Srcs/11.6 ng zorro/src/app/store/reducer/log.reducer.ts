/*
import {auth, LoginUser} from '../../login/loginUser.model';
import {Action} from '@ngrx/store';
import {COM, RESET, SELECT_PASSWORD, SELECT_USERID} from '../actions/log.actions';

export function logReducer(state: LoginUser = auth, action: Action) {
  switch (action.type) {
    case SELECT_USERID:
      return Object.assign({}, state, {
        userId: action.payload
      });
    case SELECT_PASSWORD:
      return Object.assign({}, state, {
        password: action.payload
      });
    case COM:
      return Object.assign({}, state, {
        com: action.payload
      });
    case RESET:
      return Object.assign({}, state, auth);
    default:
      return state;
  }
}
*/

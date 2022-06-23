import {
  createReducer,
  on
} from '@ngrx/store';
import { User } from '../models/user.model';
import { AuthActions } from '../services/auth/action-types';

export interface State {
  user?: User
}

export const initialState = {}

export const reducer = createReducer(
  initialState,
  on(AuthActions.login, (state, action): State => {
    return { ...state, user: action.user }
  }),
  on(AuthActions.logout, (state): State => {
    return { ...state, user: undefined }
  })
)

import { createReducer, on } from '@ngrx/store';
import { User } from '../../models/user.model';
import { AuthActions } from '../../services/auth/action-types';

export interface AuthState {
  user?: User
}

export const initialAuthState = {}

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, action): AuthState => {
    return { ...state, user: action.user }
  }),
  on(AuthActions.logout, (state): AuthState => {
    return { ...state, user: undefined }
  })
)

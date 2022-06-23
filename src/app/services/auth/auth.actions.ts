import { createAction, props } from "@ngrx/store";
import { User } from '../../models/user.model';

export const login = createAction(
  "[Authentication] User logged in",
  props<{ user: User }>()
)

export const logout = createAction(
  "[Authentication] User logged out"
)

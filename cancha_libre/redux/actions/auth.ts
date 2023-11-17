import { Dispatch } from 'redux';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export interface LoginAction {
  type: typeof LOGIN;
  payload: string; // Token JWT
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export type AuthActionTypes = LoginAction | LogoutAction;

export const login = (token: string): AuthActionTypes => ({
  type: LOGIN,
  payload: token,
});

export const logout = (): AuthActionTypes => ({
  type: LOGOUT,
});

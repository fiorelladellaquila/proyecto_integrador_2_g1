export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_REMEMBER_ME = 'SET_REMEMBER_ME';

export interface LoginAction {
  type: typeof LOGIN;
  payload: string;
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export interface SetRememberMeAction {
  type: typeof SET_REMEMBER_ME;
  payload: boolean;
}

export type AuthActionTypes = LoginAction | LogoutAction | SetRememberMeAction;

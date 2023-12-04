import { LOGIN, LOGOUT, SET_REMEMBER_ME, LoginAction, LogoutAction, SetRememberMeAction } from '../types/authActionTypes';

export const login = (token: string): LoginAction => ({
  type: LOGIN,
  payload: token,
});

export const logout = (): LogoutAction => ({
  type: LOGOUT,
});

export const setRememberMe = (rememberMe: boolean): SetRememberMeAction => ({
  type: SET_REMEMBER_ME,
  payload: rememberMe,
});
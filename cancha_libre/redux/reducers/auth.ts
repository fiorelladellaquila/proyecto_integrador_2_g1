import {
  AuthActionTypes,
  LOGIN,
  LOGOUT,
  SET_REMEMBER_ME,
} from "../types/authActionTypes";

export interface AuthState {
  isAuthenticated: boolean;
  token: string;
  rememberMe: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: "",
  rememberMe: false,
};

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        token: "",
      };
    case SET_REMEMBER_ME:
      return {
        ...state,
        rememberMe: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;

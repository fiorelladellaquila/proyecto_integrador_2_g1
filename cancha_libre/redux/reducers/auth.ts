import { AuthActionTypes, LOGIN, LOGOUT } from '../actions/auth';

interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: null,
};

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;

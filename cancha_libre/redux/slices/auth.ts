// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  isAuthenticated: boolean;
  token: string;
  rememberMe: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: '',
  rememberMe: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      // Puedes almacenar el nombre de usuario si es necesario
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = '';
    },
    setRememberMe: (state, action: PayloadAction<boolean>) => {
      state.rememberMe = action.payload;
    },
  },
});

export const { login, logout, setRememberMe } = authSlice.actions;
export default authSlice.reducer;

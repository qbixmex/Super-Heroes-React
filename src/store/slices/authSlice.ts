import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AuthUser } from '../../interfaces';

export type AuthState = {
  status: 'checking' | 'authenticated' | 'not-authenticated';
  user: AuthUser | null,
  errorMessage?: string,
};

const initialState: AuthState = {
  status: 'checking',
  user: null,
  errorMessage: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onChecking: (state) => {
      state.status = 'checking';
      state.user = null;
      state.errorMessage = undefined;
    },
    onLogin: (state, action: PayloadAction<AuthUser>) => {
      state.status = 'authenticated';
      state.user = action.payload;
      state.errorMessage = undefined;
    },
    onLogout: (state, action: PayloadAction<string | undefined>) => {
      state.status = 'not-authenticated';
      state.user = null;
      state.errorMessage = action?.payload ?? undefined;
    },
    onClearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
});

export const {
  onChecking, onLogin, onLogout, onClearErrorMessage,
} = authSlice.actions;

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../interfaces';

export type UsersState = {
  users?: User[];
  isLoading?: boolean;
  showProfile?: boolean;
  activeUser?: null | User;
};

const initialState: UsersState = {
  users: [],
  isLoading: false,
  showProfile: false,
  activeUser: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    onStartLoadingUsers: (state) => {
      state.isLoading = true;
    },
    onSetUsers: (state, action: PayloadAction<UsersState>) => {
      state.isLoading = false;
      state.users = action.payload.users;
    },
    onSetActiveUser: (state, action: PayloadAction<UsersState>) => {
      state.activeUser = action.payload.activeUser;
    },
    onSetShowUserProfile: (state) => {
      state.showProfile = !state.showProfile;
    },
    onClearActiveUser: (state) => {
      state.activeUser = null;
    },
  },
});

export const {
  onStartLoadingUsers, onSetUsers, onSetActiveUser, onSetShowUserProfile,
  onClearActiveUser,
} = usersSlice.actions;

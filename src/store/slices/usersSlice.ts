import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../interfaces';

export type UsersState = {
  users?: User[];
  isLoading?: boolean;
  isSaving?: boolean;
  showProfile?: boolean;
  activeUser?: null | User;
  formSubmitted?: boolean;
};

const initialState: UsersState = {
  users: [],
  isLoading: false,
  isSaving: false,
  showProfile: false,
  activeUser: null,
  formSubmitted: false,
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
    onSavingUser: (state) => {
      state.isSaving = !state.isSaving;
    },
    onCreateUser: (state, action: PayloadAction<User>) => {
      state.users?.unshift({
        ...action.payload,
      });
      state.activeUser = null;
      state.formSubmitted = true;
      state.isSaving = false;
    },
    onUpdateUser: (state, action: PayloadAction<{ updatedUser: User }>) => {
      state.users = state.users?.map(user => {
        if (user._id === action.payload.updatedUser._id) {
          return action.payload.updatedUser;
        }
        return user;
      });
      state.activeUser = null;
      state.formSubmitted = true;
      state.isSaving = false;
    },
    onDeleteUser: (state, action: PayloadAction<{ id: string }>) => {
      state.users = state.users?.filter(user => {
        return user._id !== action.payload.id;
      });
    },
    onResetUserFormSubmitted: (state) => {
      state.formSubmitted = false;
    },
    onClearUsersState: (state) => {
      state.users = [];
      state.isLoading = false;
      state.showProfile = false;
      state.activeUser = null;
    },
  },
});

export const {
  onStartLoadingUsers, onSetUsers, onSetActiveUser, onSetShowUserProfile,
  onClearActiveUser, onCreateUser, onUpdateUser, onDeleteUser,
  onSavingUser, onResetUserFormSubmitted, onClearUsersState,
} = usersSlice.actions;

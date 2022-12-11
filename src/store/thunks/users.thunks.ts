/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dispatch } from 'redux';
import Swal from 'sweetalert2';
import { User } from '../../interfaces';
import { getUsers, createUser, updateUser, deleteUser } from '../../users/api';
import {
  onStartLoadingUsers, onSetUsers, onCreateUser, onUpdateUser,
  onDeleteUser, onResetFormSubmitted,
} from '../slices';
import { RootState as GetState } from '../store';

export const fetchUsers = () => {
  return async (dispatch: Dispatch, _getState: () => GetState) => {
    try {
      dispatch(onStartLoadingUsers());

      const localUsers = localStorage.getItem('users');

      if (!localUsers) {
        //* API CALL
        const data = await getUsers();
        const users = (data.ok) ? data.users : [];
        //* Users Slice
        dispatch(onSetUsers({ users }));
        //* Save to Local Storage
        localStorage.setItem('users', JSON.stringify(users));
      } else {
        dispatch(onSetUsers({ users: JSON.parse(localUsers) }));
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const startSavingUser = (user: User) => {
  return async (dispatch: Dispatch, getState: () => GetState) => {
    try {
      //* API CALL
      const data = await createUser(user);
      if (data?.user) {
        //* Users Slice
        dispatch(onCreateUser(data.user));
        const { users } = getState().users;
        //* Save to Local Storage
        localStorage.setItem('users', JSON.stringify(users));
        //* Show Notification
        Swal.fire({
          position: 'center',
          title: 'OK',
          html: 'User created successfully',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire('Error', String(error), 'error');
    }
  };
};

export const startUpdatingUser = (user: User) => {
  return async (dispatch: Dispatch, getState: () => GetState) => {
    try {
      //* API CALL
      const data = await updateUser(user);
      if (data?.user) {
        //* Users Slice
        dispatch(onUpdateUser({ updatedUser: data.user }));
        const { users } = getState().users;
        //* Save to Local Storage
        localStorage.setItem('users', JSON.stringify(users));
        //* Show Notification
        Swal.fire({
          position: 'center',
          title: 'OK',
          html: 'User updated successfully',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire('Error', String(error), 'error');
    }
  };
};

export const startDeletingUser = (id: string) => {
  return async (dispatch: Dispatch, getState: () => GetState) => {
    try {
      //* API CALL
      const data = await deleteUser(id);
      if (data?.ok) {
        //* Users Slice
        dispatch(onDeleteUser({ id }));
        const { users } = getState().users;
        //* Save to Local Storage
        localStorage.setItem('users', JSON.stringify(users));
        //* Show Notification
        Swal.fire({
          position: 'center',
          title: 'OK',
          html: 'User was deleted successfully',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire('Error', String(error), 'error');
    }
  };
};

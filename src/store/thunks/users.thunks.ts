/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dispatch } from 'redux';
import Swal from 'sweetalert2';
import { User } from '../../interfaces';
import { getUsers, createUser } from '../../users/api';
import { onStartLoadingUsers, onSetUsers, onCreateUser } from '../slices';
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
        Swal.fire({
          position: 'center',
          title: 'OK',
          html: 'USer created successfully',
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

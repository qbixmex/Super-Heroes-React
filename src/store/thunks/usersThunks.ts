/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dispatch } from 'redux';
// TODO import Swal from 'sweetalert2';
import { getUsers } from '../../users/api';
import { onStartLoadingUsers, onSetUsers } from '../slices';
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
        localStorage.setItem('heroes', JSON.stringify(users));
      } else {
        dispatch(onSetUsers({ users: JSON.parse(localUsers) }));
      }
    } catch (error) {
      console.error(error);
    }
  };
};

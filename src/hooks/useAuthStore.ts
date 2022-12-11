import { authApi } from '../api';
import { Login } from '../interfaces';
import {
  onChecking, onLogin, onLogout, onClearErrorMessage,
  onClearHeroesState, onClearUsersState,
} from '../store';
import { useAppDispatch, useAppSelector } from './redux-hooks';

export const useAuthStore = () => {
  const { status, user, errorMessage } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const startLogin = async ({ email, password }: Login) => {
    dispatch(onChecking());

    try {
      const data = await authApi.login({ email, password });
      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', String(new Date().getTime()));
      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      dispatch(onLogout(String(error)));
      setTimeout(() => dispatch(onClearErrorMessage()), 100);
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      dispatch(onLogout());
      return;
    }

    try {
      const data = await authApi.renew();
      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', String(new Date().getTime()));
      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      localStorage.clear();
      dispatch(onLogout(String(error)));
      setTimeout(() => dispatch(onClearErrorMessage()), 100);
    }
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
    dispatch(onClearHeroesState());
    dispatch(onClearUsersState());
  };

  return {
    //* Properties
    status,
    user,
    errorMessage,

    //* Methods
    startLogin,
    checkAuthToken,
    startLogout,
  };
};

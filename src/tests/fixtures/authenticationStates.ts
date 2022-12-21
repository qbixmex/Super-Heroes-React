import { AuthUser } from '../../interfaces';
import { AuthState } from '../../store';

export const authenticatedUser: AuthUser = {
  name: 'Stan Lee',
  uid: '6393606e74e67491aef6bf2c',
};

export const initialState: AuthState = {
  status: 'checking',
  user: null,
  errorMessage: undefined,
};

export const authenticatedState: AuthState = {
  status: 'authenticated',
  user: authenticatedUser,
  errorMessage: undefined,
};

export const notAuthenticatedState: AuthState = {
  status: 'not-authenticated',
  user: null,
  errorMessage: undefined,
};

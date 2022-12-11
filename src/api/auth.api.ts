import { Login, AuthResponse } from '../interfaces';
import { getEnvironmentVariables } from '../helpers';

const { VITE_API_URL } = getEnvironmentVariables();

export const login = async (formData: Login): Promise<AuthResponse> => {
  const response = await fetch(`${VITE_API_URL}/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    const error = await response.json();
    if (error.msg) throw new Error(error.msg);
    if (error.errors) throw new Error(error.errors[0].msg);
  }

  const data = await response.json();
  return data;
};

export const renew = async () => {
  const response = await fetch(`${VITE_API_URL}/auth/renew`, {
    method: 'GET',
    headers: {
      'x-token': localStorage.getItem('token') ?? '',
    },
  });

  if (!response.ok) {
    const error = await response.json();
    if (error.msg) throw new Error(error.msg);
    if (error.errors) throw new Error(error.errors[0].msg);
  }

  const data = await response.json();
  return data;
};

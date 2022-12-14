import { getEnvironmentVariables } from '../../helpers';
import { User } from '../../interfaces';

type UsersData = {
  ok: boolean;
  users: User[];
  total: number;
};

const { VITE_API_URL } = getEnvironmentVariables();

export const getUsers = async (): Promise<UsersData> => {
  const response = await fetch(`${VITE_API_URL}/users`, {
    headers: {
      'x-token': localStorage.getItem('token') ?? '',
    },
  });

  if (!response) {
    throw new Error('Data could not be fetched!');
  }

  const data = await response.json();

  return data;
};

import { getEnvironmentVariables } from '../../helpers';
import { UserData } from '../../interfaces';

const { VITE_API_URL } = getEnvironmentVariables();

export async function deleteUser(id: string): Promise<UserData | void> {
  const response = await fetch(
    `${VITE_API_URL}/users/${id}`,
    {
      method: 'DELETE',
      headers: {
        'x-token': localStorage.getItem('token') ?? '',
      },
    },
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.errors[0].msg);
  }

  const data = await response.json() as UserData;
  return data;
}

import { getEnvironmentVariables } from '../../helpers';
import { User } from '../../interfaces';

type UserData = {
  ok: boolean;
  user: User;
};

const { VITE_API_URL } = getEnvironmentVariables();

export async function createUser(formData: User): Promise<UserData | void> {
  const response = await fetch(`${VITE_API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-token': localStorage.getItem('token') ?? '',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    const error = await response.json();
    if (error.msg) throw new Error(error.msg);
    if (error.errors) throw new Error(error.errors[0].msg);
  }

  const data = await response.json() as UserData;
  return data;
}

import { getEnvironmentVariables } from '../../helpers';
import { User } from '../../interfaces';

type UserData = {
  ok: boolean;
  user: User;
};

const { VITE_API_URL } = getEnvironmentVariables();

export async function createUser(formData: User): Promise<UserData | void> {
  const dataObject = new FormData();

  dataObject.append('firstName', formData.firstName);
  dataObject.append('lastName', formData.lastName);
  dataObject.append('email', formData.email);
  dataObject.append('password', formData.password as string);
  dataObject.append('image', formData.image as File);
  dataObject.append('role', formData.role);

  const response = await fetch(`${VITE_API_URL}/users`, {
    method: 'POST',
    headers: {
      'x-token': localStorage.getItem('token') ?? '',
    },
    body: dataObject,
  });

  if (!response.ok) {
    const error = await response.json();
    if (error.msg) throw new Error(error.msg);
    if (error.errors) throw new Error(error.errors[0].msg);
  }

  const data = await response.json() as UserData;
  return data;
}

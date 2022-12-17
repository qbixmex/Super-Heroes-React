import { getEnvironmentVariables } from '../../helpers';
import { User } from '../../interfaces';

type UserData = {
  ok: boolean;
  user: User;
};

const { VITE_API_URL } = getEnvironmentVariables();

export async function updateUser(formData: User): Promise<UserData | void> {
  const dataObject = new FormData();

  dataObject.append('firstName', formData.firstName);
  dataObject.append('lastName', formData.lastName);
  dataObject.append('email', formData.email);
  formData.password && dataObject.append('password', formData.password as string);
  formData.image && dataObject.append('image', formData.image as File);
  dataObject.append('role', formData.role);

  const response = await fetch(`${VITE_API_URL}/users/${formData._id}`, {
    method: 'PATCH',
    headers: {
      'x-token': localStorage.getItem('token') ?? '',
    },
    body: dataObject,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.errors[0].msg);
  }

  const data = await response.json() as UserData;
  return data;
}

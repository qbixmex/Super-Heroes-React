import { UserData } from '../../interfaces';

export async function deleteUser(id: string): Promise<UserData | void> {
  const response = await fetch(
    `http://localhost:3000/api/v1/users/${id}`,
    {
      method: 'DELETE',
      headers: {
        'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzkzNjBiMjc0ZTY3NDkxYWVmNmJmMmYiLCJuYW1lIjoiTWljaGFlbCBKYWNrc29uIiwiaWF0IjoxNjcwNjg4NDk3LCJleHAiOjE2NzA2OTIwOTd9.vRaZRE_CzciqRdQdMrhfr7fSG4kSbfpuAVBzXIzDx_c',
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

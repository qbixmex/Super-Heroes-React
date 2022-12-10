import { User } from '../../interfaces';

type UserData = {
  ok: boolean;
  user: User;
};

export async function createUser(formData: User): Promise<UserData | void> {
  const response = await fetch('http://localhost:3000/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzkzNjBiMjc0ZTY3NDkxYWVmNmJmMmYiLCJuYW1lIjoiTWljaGFlbCBKYWNrc29uIiwiaWF0IjoxNjcwNjg4NDk3LCJleHAiOjE2NzA2OTIwOTd9.vRaZRE_CzciqRdQdMrhfr7fSG4kSbfpuAVBzXIzDx_c',
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

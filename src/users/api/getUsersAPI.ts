import { User } from '../../interfaces';

type UsersData = {
  ok: boolean;
  users: User[];
  total: number;
};

export const getUsers = async (): Promise<UsersData> => {
  const response = await fetch('http://localhost:3000/api/v1/users', {
    headers: {
      'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzkzNjBiMjc0ZTY3NDkxYWVmNmJmMmYiLCJuYW1lIjoiTWljaGFlbCBKYWNrc29uIiwiaWF0IjoxNjcwNjg4NDk3LCJleHAiOjE2NzA2OTIwOTd9.vRaZRE_CzciqRdQdMrhfr7fSG4kSbfpuAVBzXIzDx_c',
    },
  });

  if (!response) {
    throw new Error('Data could not be fetched!');
  }

  const data = await response.json();

  return data;
};

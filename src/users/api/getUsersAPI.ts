import { User } from '../../interfaces';

type UsersData = {
  ok: boolean;
  users: User[];
  total: number;
};

export const getUsers = async (): Promise<UsersData> => {
  const response = await fetch('http://localhost:3000/api/v1/users', {
    headers: {
      'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzkzNjBiMjc0ZTY3NDkxYWVmNmJmMmYiLCJuYW1lIjoiTWljaGFlbCBKYWNrc29uIiwiaWF0IjoxNjcwNjQxMzE3LCJleHAiOjE2NzA2NDQ5MTd9.Bhn63KwGDQDrWjsVWhPYaM8iTSLoQCTaf9xSS4qnEOI',
    },
  });

  if (!response) {
    throw new Error('Data could not be fetched!');
  }

  const data = await response.json();

  return data;
};

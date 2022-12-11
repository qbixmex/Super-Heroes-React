import { getEnvironmentVariables } from '../../helpers';
import { Hero } from '../../interfaces';

type HeroesData = {
  ok: boolean;
  heroes: Hero[];
  total: number;
};

const { VITE_API_URL } = getEnvironmentVariables();

export const getHeroes = async (): Promise<HeroesData> => {
  const response = await fetch(
    `${VITE_API_URL}/heroes?limit=100`,
    {
      headers: {
        'x-token': localStorage.getItem('token') ?? '',
      },
    },
  );

  if (!response) {
    throw new Error('Data could not be fetched!');
  }

  const data = await response.json();

  return data;
};

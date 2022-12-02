import { Hero } from '../interfaces';

type HeroesData = {
  ok: boolean;
  heroes: Hero[];
  total: number;
};

export const getHeroes = async (): Promise<HeroesData> => {
  const response = await fetch('http://localhost:3000/api/v1/heroes');

  if (!response) {
    throw new Error('Data could not be fetched!');
  }

  const data = await response.json();

  return data;
};

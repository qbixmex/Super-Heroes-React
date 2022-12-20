import { getHeroById } from './04-imp-exp';

export type Hero = {
  id: number;
  name: string;
  studio: string;
};

export const getHeroByIdAsync = (id: number): Promise<Hero | void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroById(id);
      return (p1)
        ? resolve(p1)
        : reject(`Cannot find hero by given id: ${id}`);
    }, 1000);
  });
};

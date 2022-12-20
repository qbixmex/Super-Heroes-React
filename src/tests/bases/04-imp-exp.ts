import heroes from './data.heroes.json';

export const getHeroById = (id: number) => {
  const result = heroes.find((hero) => hero.id === id);
  return (!result) ? null : result;
};

export const getHeroesByStudio = (studio: string) => {
  const result = heroes.filter((hero) => hero.studio === studio);
  return (result.length === 0) ? null : result;
};

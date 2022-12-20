import { describe, test, expect } from 'vitest';
import { getHeroById, getHeroesByStudio } from './04-imp-exp';

describe('Tests on imp-exp', () => {
  test('Should return an hero object', () => {
    const batman = getHeroById(1);
    const spiderman = getHeroById(2);

    expect(batman).toEqual({
      id: 1,
      name: 'Batman',
      studio: 'DC',
    });

    expect(spiderman).toEqual({
      id: 2,
      name: 'Spiderman',
      studio: 'Marvel',
    });
  });
  test('Should return null if hero id does not exist', () => {
    const hero = getHeroById(100);
    expect(hero).toBe(null);
  });
  test('Should return an hero object', () => {
    const dc = getHeroesByStudio('DC');
    expect(dc?.length).not.toBe(0);
    expect(dc?.length).toBeGreaterThan(0);
    expect(dc![0].studio).toBe('DC');

    const marvel = getHeroesByStudio('Marvel');

    expect(marvel).toBeTruthy();
    expect(marvel?.length).not.toBe(0);
    expect(marvel?.length).toBeGreaterThan(0);
    expect(marvel![0].studio).toBe('Marvel');
  });
  test('Should return null if studio does not exist', () => {
    const toei = getHeroesByStudio('TOEI');
    expect(toei).toBe(null);
    expect(toei).toBeFalsy();
  });
});

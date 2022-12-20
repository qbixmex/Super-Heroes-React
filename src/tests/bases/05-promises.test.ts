import { describe, test, expect } from 'vitest';
import { Hero, getHeroByIdAsync } from './05-promises';

describe('Tests on promises', () => {
  test('Should throw an error if hero does not exist', () => new Promise<Hero | void>(done => {
    const id = 100;
    getHeroByIdAsync(id)
      .then((hero) => {
        expect(hero).toBeFalsy();
        done();
      })
      .catch((error) => {
        expect(error).toBe(`Cannot find hero by given id: ${id}`);
        done();
      });
  }));

  test('Should return a hero if exist', () => new Promise<Hero | void>(done => {
    const id = 1;
    getHeroByIdAsync(id)
      .then((hero) => {
        expect(hero).toEqual({
          id: 1,
          name: 'Batman',
          studio: 'DC',
        });
        done();
      })
      .catch((error) => {
        expect(error).toBeFalsy();
        done();
      });
  }));
});

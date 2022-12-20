import { describe, test, expect } from 'vitest';
import { getImage } from './06-async-await';
import { getEnvironmentVariables } from '../../helpers';

const { VITE_API_KEY } = getEnvironmentVariables();

describe('Tests on promises', () => {
  test('Should return an image string', async () => {
    try {
      const url = await getImage(VITE_API_KEY);
      expect(url).toBeTruthy();
      expect(typeof url).toBe('string');
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });
  test('Should throw an error if api key does not exist', async () => {
    try {
      const image = await getImage('123');
      expect(image).toBeFalsy();
    } catch (error) {
      expect(error).toBe('Image not found');
    }
  });
});

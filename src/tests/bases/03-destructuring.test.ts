import { describe, test, expect } from 'vitest';
import { usContext, returnArray } from './03-destructuring';

describe('Tests on destructuring', () => {
  test('Should return an object', () => {
    const obj = {
      keyName: 'abc',
      name: 'Daniel',
      age: 25,
      range: 'sailor',
      coordinates: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };

    const object = usContext({
      key: obj.keyName,
      name: obj.name,
      age: obj.age,
      range: obj.range,
    });

    expect(object).toEqual(obj);
  });
  test('Should return an array', () => {
    const [ letters, numbers ] = returnArray();
    expect(typeof letters).toBe('string');
    expect(typeof numbers).toBe('number');
    expect(letters).toEqual(expect.any(String));
    expect(numbers).toEqual(expect.any(Number));
  });
});

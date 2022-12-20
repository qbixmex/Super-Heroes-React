import { describe, test, expect } from 'vitest';

import { add, addString, reduction, multiply, division } from './math';

describe('My First Test', () => {
  test('Should make additions', () => {
    let result = add(2, 2);
    expect(result).toBe(4);

    result = add(4, 8);
    expect(result).toBe(12);
  });
  test('Should make reductions', () => {
    let result = reduction(4, 2);
    expect(result).toBe(2);

    result = reduction(12, 6);
    expect(result).toBe(6);
  });
  test('Should make multiplications', () => {
    let result = multiply(4, 2);
    expect(result).toBe(8);

    result = multiply(6, 6);
    expect(result).toBe(36);
  });
  test('Should make divisions', () => {
    let result = division(12, 2);
    expect(result).toBe(6);

    result = division(1250, 2);
    expect(result).toBe(625);
  });
  test('Should not equal', () => {
    const result = add(2, 2);
    expect(result).not.equal(6);
  });
  test('Should be a number', () => {
    const result = add(2, 2);
    expect(result).to.be.a('number');
  });
  test('Should be a string result', () => {
    const result = addString('2', '2');
    expect(result).to.be.a('string');
    expect(typeof result === 'string').to.be.true;
    expect(result).toBe('4');
  });
});

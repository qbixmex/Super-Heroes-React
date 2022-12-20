import { describe, test, expect } from 'vitest';

import { student } from './object';

describe('Testing Objects', () => {
  test('Should match equality', () => {
    expect(student).toEqual({
      name: expect.any(String),
      age: expect.any(Number),
    });
  });
  test('Should be same memory address', () => {
    const obj1 = { a: 'javascript' };
    const obj2 = obj1;

    // This should fail because is not same memory address
    // expect(obj).to.equal({ a: 'javascript' });

    expect(obj1).to.equal(obj1);
    expect(obj1).to.equal(obj2);
    expect(obj1).to.deep.equal({ a: 'javascript' });
  });
});

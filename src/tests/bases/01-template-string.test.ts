import { describe, test, expect } from 'vitest';
import getGreeting from './01-template-string';

describe('Tests on getGreeting()', () => {
  test('Should return an string', () => {
    const fullName = 'Daniel González';
    const message = getGreeting(fullName);
    expect(message).toBe(`Hello ${fullName}`);
  });
});

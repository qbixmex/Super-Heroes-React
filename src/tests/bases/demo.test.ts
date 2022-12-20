import { describe, test, expect } from 'vitest';

describe('Test Demo', () => {
  test('Cannot divide into 0', () => {
    const message1 = 'Hello World';
    const message2 = message1.trim();

    expect(message1).toBe(message2);
  });
});

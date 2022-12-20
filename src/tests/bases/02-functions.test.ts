import { describe, test, expect } from 'vitest';
import { getUser, getActiveUser } from './02-functions';

describe('Tests on functions', () => {
  test('Should return an object', () => {
    const testUser = { uid: 'ABC123', username: 'qbixmex' };
    const user = getUser();
    expect(user).toEqual(testUser);
  });

  test('Should return an active user', () => {
    const username = 'qbixmex';
    const testUser = { uid: 'ABC567', username };
    const result = getActiveUser(username);
    expect(result).toEqual(testUser);
  });
});

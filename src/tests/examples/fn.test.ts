import { beforeEach, describe, it, expect, vi } from 'vitest';

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const mockFn = vi.fn();
const randomSpy = vi.spyOn(Math, 'random');

describe('Random Between', () => {
  describe.only('A function always return a value', () => {
    mockFn.mockReturnValue(5);
    it('returns 5', () => {
      expect(mockFn()).toBe(5);
      expect(mockFn).toHaveBeenCalled();
      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(mockFn).toHaveReturnedWith(5);
    });
  });

  describe('when Math.random() returns 0', () => {
    beforeEach(() => {
      randomSpy.mockClear().mockReturnValue(0);
    });
    it('Called with min=3 and max=5 returns 3', () => {
      expect(randomBetween(3, 5)).toBe(3);
      expect(randomSpy).toHaveBeenCalled();
      expect(randomSpy).toHaveBeenCalledTimes(1);
    });
    it('Called with min=1 and max=2 returns 3', () => {
      expect(randomBetween(1, 2)).toBe(1);
      expect(randomSpy).toHaveBeenCalled();
      expect(randomSpy).toHaveBeenCalledTimes(1);
    });
  });
  describe('when Math.random() returns 0.5', () => {
    beforeEach(() => {
      randomSpy.mockClear().mockReturnValue(0.5);
    });
    it('Called with min=3 and max=5 returns 4', () => {
      expect(randomBetween(3, 5)).toBe(4);
      expect(randomSpy).toHaveBeenCalled();
      expect(randomSpy).toHaveBeenCalledTimes(1);
    });
    it('Called with min=5 and max=8 returns ?', () => {
      expect(randomBetween(5, 8)).toBe(7);
      expect(randomSpy).toHaveBeenCalled();
      expect(randomSpy).toHaveBeenCalledTimes(1);
    });
  });
  describe('when Math.random() returns 0.999999', () => {
    beforeEach(() => {
      randomSpy.mockClear().mockImplementation(() => 0.999999);
    });
    it('Called with min=3 and max=5 returns 4', () => {
      expect(randomBetween(3, 5)).toBe(5);
      expect(randomSpy).toHaveBeenCalled();
      expect(randomSpy).toHaveBeenCalledTimes(1);
    });
  });
});

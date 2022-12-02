import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import HeroesApp from './heroes-app';

describe('Test on <HeroesApp />', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = render(<HeroesApp />).container;
  });

  test('Should show component', () => {
    const h1 = container.querySelector('h1');
    expect(h1?.innerHTML).toBe('Heroes');
  });
});

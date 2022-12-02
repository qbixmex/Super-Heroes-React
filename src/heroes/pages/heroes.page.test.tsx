import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import { HeroesPage } from './heroes.page';

describe('Test on <HeroesPage />', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = render(<HeroesPage />).container;
  });

  test('Should show component', () => {
    const h1 = container.querySelector('h1');
    expect(h1?.innerHTML).toBe('Heroes');
  });
});

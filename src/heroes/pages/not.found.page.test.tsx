import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import { NotFoundPage } from './not.found.page';

describe('Test on <HeroesPage />', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = render(<NotFoundPage />).container;
  });

  test('Should show component', () => {
    const p = container.querySelector('p');
    expect(p?.innerHTML).toContain('Not Found Page');
  });
});

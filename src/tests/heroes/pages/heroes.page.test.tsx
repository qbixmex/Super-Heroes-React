import { Provider } from 'react-redux';
import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import { HeroesPage } from '../../../heroes/pages/heroes.page';
import { store } from '../../../store';

describe('Test on <HeroesPage />', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('Should show component', () => {
    const { container } = render(
      <Provider store={store}>
        <HeroesPage />
      </Provider>,
    );
    const h1 = container.querySelector('h1');
    expect(h1?.innerHTML).toBe('Heroes');
  });
});

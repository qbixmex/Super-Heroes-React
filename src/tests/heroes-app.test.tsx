import { Provider } from 'react-redux';
import { describe, test, vi, Mock } from 'vitest';
import { render } from '@testing-library/react';
import HeroesApp from '../heroes-app';
import { store } from '../store';
import { useAuthStore } from '../hooks/useAuthStore';

vi.mock('../hooks/useAuthStore');

describe('Test on <HeroesApp />', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('Should show component', () => {
    (useAuthStore as Mock).mockReturnValue({
      status: 'authenticated',
      checkAuthToken: vi.fn(),
    });

    const { container } = render(
      <Provider store={store}>
        <HeroesApp />
      </Provider>,
    );

    const h1 = container.querySelector('h1');
    expect(h1?.innerHTML).toBe('Heroes');
  });
});

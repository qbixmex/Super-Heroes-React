import { describe, test, vi, Mock } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ProtectedRoutes } from '../../router/protected.routes';
import { useAuthStore } from '../../hooks/useAuthStore';

import { store } from '../../store/store';

const mockCheckAuthToken = vi.fn();

vi.mock('../../hooks/useAuthStore');

vi.mock('../../heroes/pages/heroes.page', () => ({
  HeroesPage: () => <h1>Heroes</h1>,
}));

describe('Test on <ProtectedRoutes />', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('Should show default page', () => {
    (useAuthStore as Mock).mockReturnValue({
      status: 'authenticated',
      checkAuthToken: mockCheckAuthToken,
    });

    render(
      <Provider store={ store }>
        <MemoryRouter>
          <ProtectedRoutes />
        </MemoryRouter>
      </Provider>,
    );

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});

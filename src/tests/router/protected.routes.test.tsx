import { describe, test, vi, Mock } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ProtectedRoutes } from '../../router/protected.routes';
import { useAuthStore } from '../../hooks/useAuthStore';

import { store } from '../../store/store';

vi.mock('../../hooks/useAuthStore');

vi.mock('../../heroes/pages/heroes.page', () => ({
  HeroesPage: () => <h1>Heroes</h1>,
}));

vi.mock('../../users/pages', () => ({
  UsersPage: () => <h1>Users</h1>,
}));

describe('Test on <ProtectedRoutes />', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('Should show default page', () => {
    (useAuthStore as Mock).mockReturnValue({
      status: 'authenticated',
      checkAuthToken: vi.fn(),
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

  test('Should show heroes page', () => {
    (useAuthStore as Mock).mockReturnValue({
      status: 'authenticated',
      checkAuthToken: vi.fn(),
    });

    render(
      <Provider store={ store }>
        <MemoryRouter initialEntries={['/heroes']}>
          <ProtectedRoutes />
        </MemoryRouter>
      </Provider>,
    );

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  test('Should show users page', () => {
    (useAuthStore as Mock).mockReturnValue({
      status: 'authenticated',
      checkAuthToken: vi.fn(),
    });

    render(
      <Provider store={ store }>
        <MemoryRouter initialEntries={['/users']}>
          <ProtectedRoutes />
        </MemoryRouter>
      </Provider>,
    );

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  test('Should redirect to default page', () => {
    (useAuthStore as Mock).mockReturnValue({
      status: 'authenticated',
      checkAuthToken: vi.fn(),
    });

    render(
      <Provider store={ store }>
        <MemoryRouter initialEntries={['/wrong/page']}>
          <ProtectedRoutes />
        </MemoryRouter>
      </Provider>,
    );

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.innerHTML).toBe('Heroes');
  });
});

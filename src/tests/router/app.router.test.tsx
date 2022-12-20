import { describe, test, vi, Mock } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppRouter } from '../../router';
import { store } from '../../store/store';
import { useAuthStore } from '../../hooks/useAuthStore';

const mockCheckAuthToken = vi.fn();

vi.mock('../../hooks/useAuthStore');

describe('Test on <AppRouter />', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('Should show Login Page', () => {
    (useAuthStore as Mock).mockReturnValue({
      status: 'not-authenticated',
      checkAuthToken: mockCheckAuthToken,
    });

    const { container } = render(
      <Provider store={ store }>
        <MemoryRouter>
          <AppRouter />
        </MemoryRouter>
      </Provider>,
    );

    const labels = container.querySelectorAll('.form-label');
    const emailInput = container.querySelector('#email');
    const passwordInput = container.querySelector('#password');

    expect(labels[0].innerHTML).toBe('Email');
    expect(labels[1].innerHTML).toBe('Password');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(mockCheckAuthToken).toBeCalledTimes(1);
  });

  test('Should show Spinner when checking state', () => {
    (useAuthStore as Mock).mockReturnValue({
      status: 'authenticated',
      checkAuthToken: mockCheckAuthToken,
    });

    const { container } = render(
      <Provider store={ store }>
        <MemoryRouter>
          <AppRouter />
        </MemoryRouter>
      </Provider>,
    );

    const brandText = container.querySelector('.navbar-brand');
    const h1 = container.querySelector('h1');
    const spinner = container.querySelector('#spinner');

    expect(brandText?.innerHTML).toBe('Heroes Base');
    expect(h1?.innerHTML).toBe('Heroes');
    expect(spinner).toBeInTheDocument();
    expect(mockCheckAuthToken).toBeCalledTimes(1);
  });
});

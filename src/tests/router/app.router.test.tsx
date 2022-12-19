import { describe, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppRouter } from '../../router';
import { store } from '../../store';

beforeEach(() => vi.clearAllMocks());

describe('Test on <AppRouter />', () => {
  test('Should show Login Page', () => {
    const { container } = render(
      <Provider store={store}>
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
  });
});

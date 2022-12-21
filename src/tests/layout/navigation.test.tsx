import { describe, test, vi, Mock } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { useAuthStore } from '../../hooks/useAuthStore';
import { Navigation } from '../../layout/navigation';

const mockStartLogout = vi.fn();
vi.mock('../../hooks/useAuthStore');

describe('Test on <Navigation />', () => {
  test('Should show Login Page', () => {
    const usernameText = 'Stan Lee';
    (useAuthStore as Mock).mockReturnValue({
      user: {
        name: usernameText,
        uid: '6393606e74e67491aef6bf2c',
      },
      startLogout: mockStartLogout,
    });

    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>
      </Provider>,
    );

    const username = container.querySelector('#username');

    expect(username?.innerHTML).toBe(usernameText);
  });
  test('Should call logout action', () => {
    (useAuthStore as Mock).mockReturnValue({
      user: {
        name: 'Stan Lee',
        uid: '6393606e74e67491aef6bf2c',
      },
      startLogout: mockStartLogout,
    });

    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>
      </Provider>,
    );

    const logoutBtn = container.querySelector('#logout');

    logoutBtn && fireEvent.click(logoutBtn);

    expect(mockStartLogout).toHaveBeenCalled();
  });
});

import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PublicRoutes } from '../../router/public.routes';

import { store } from '../../store/store';

describe('Test on <PublicRoutes />', () => {
  test('Should show default page', () => {
    const { container } = render(
      <Provider store={ store }>
        <MemoryRouter initialEntries={['/auth/login']}>
          <PublicRoutes />
        </MemoryRouter>
      </Provider>,
    );

    const loginForm = container.querySelector('#login-form');

    expect(loginForm).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  test('Should redirect to login page', () => {
    const { container } = render(
      <Provider store={ store }>
        <MemoryRouter initialEntries={['/auth/wrong/page']}>
          <PublicRoutes />
        </MemoryRouter>
      </Provider>,
    );

    const loginForm = container.querySelector('#login-form');

    expect(loginForm).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});

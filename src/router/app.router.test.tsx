import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from './app.router';

describe('Test on <AppRouter />', () => {
  test('Should show heroes routes', () => {
    const { container } = render(
      <MemoryRouter>
        <AppRouter />
      </MemoryRouter>,
    );
    const h1 = container.querySelector('h1');
    expect(h1?.innerHTML).toBe('Heroes');
  });
  test('Should show login route', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/auth/login']}>
        <AppRouter />
      </MemoryRouter>,
    );
    const h1 = container.querySelector('h1');
    expect(h1?.innerHTML).toContain('Login Page');
  });
  test('Should show not found route', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/coconut']}>
        <AppRouter />
      </MemoryRouter>,
    );
    const p = container.querySelector('p');
    expect(p?.innerHTML).toContain('Not Found Page');
  });
});

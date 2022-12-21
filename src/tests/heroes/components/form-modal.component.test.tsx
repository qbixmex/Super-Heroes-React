import { describe, test, beforeEach } from 'vitest';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { FormModal } from '../../../heroes/components';
import { authenticatedState } from '../../fixtures/authenticationStates';
import { authSlice, usersSlice, heroesSlice } from '../../../store';

vi.mock('react-redux', async () => ({
  ...(await vi.importActual<any>('react-redux')),
}));

const store = configureStore({
  reducer: {
    heroes: heroesSlice.reducer,
    users: usersSlice.reducer,
    auth: authSlice.reducer,
  },
  preloadedState: {
    auth: authenticatedState,
  },
});

describe('<FormModal />', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('Should show modal on click add button', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <FormModal />
        </MemoryRouter>
      </Provider>,
    );

    //* 1) Arrange
    const addButton = screen.getByTestId('add-button');

    //* 2) Act
    addButton && fireEvent.click(addButton);

    const title = screen.getByTestId('modal-title');

    //* 3) Expect
    expect(title?.innerHTML).toBe('Create Hero');
  });

  test.only('Should hide form modal if click close button', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <FormModal />
        </MemoryRouter>
      </Provider>,
    );

    const addButton = screen.getByTestId('add-button');

    //* Click to open modal
    addButton && fireEvent.click(addButton);

    const modal = screen.getByTestId('modal');
    const closeButton = screen.getByTestId('close-btn');

    expect(modal.parentElement).toHaveClass('show');

    //* Click to close modal
    closeButton && fireEvent.click(closeButton);

    expect(modal.parentElement).not.toHaveClass('show');
  });

  test.skip('Should have form inputs', () => {
    //* 1) Arrange
    const addButton = container.querySelector('#add-button');

    //* 2) Act
    if (addButton) fireEvent.click(addButton);

    const heroNameInput = screen.getByTestId('heroName');
    const realNameInput = screen.getByTestId('realName');
    const studioInput = screen.getByTestId('studio');

    //* 3) Expect
    expect(heroNameInput).toBeDefined();
    expect(realNameInput).toBeTruthy();
    expect(studioInput).toBeTruthy();
  });
});

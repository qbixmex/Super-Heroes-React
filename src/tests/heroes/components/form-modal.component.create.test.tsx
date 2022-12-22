import { describe, test, beforeEach } from 'vitest';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { FormModal } from '../../../heroes/components';
import { authenticatedState } from '../../fixtures/authenticationStates';
import { authSlice, usersSlice, heroesSlice } from '../../../store';
import { Hero } from '../../../interfaces';

const mockStartSavingHero = vi.fn();

vi.mock('../../../store/thunks/heroes.thunks', () => ({
  startSavingHero: (formData: Hero) => {
    return () => mockStartSavingHero(formData);
  },
}));

vi.mock('react-redux', async () => ({
  ...(await vi.importActual<any>('react-redux')),
  useAppDispatch: () => (fn: any) => fn(),
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

  test('Should hide form modal if click close button', () => {
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

  test('Should have form inputs', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <FormModal />
        </MemoryRouter>
      </Provider>,
    );

    const addButton = screen.getByTestId('add-button');

    addButton && fireEvent.click(addButton);

    const heroNameInput = screen.getByTestId('heroName');
    const realNameInput = screen.getByTestId('realName');
    const studioInput = screen.getByTestId('studio');

    expect(heroNameInput).toBeDefined();
    expect(realNameInput).toBeTruthy();
    expect(studioInput).toBeTruthy();
  });

  test('Should call startUpdatingHero action', () => {
    const newHero: Hero = {
      heroName: 'Spiderman',
      realName: 'Peter Parker',
      studio: 'Marvel',
      gender: 'male',
      image: new File(['(⌐□_□)'], 'stan-lee.jpg', { type: 'image/jpeg' }),
      nationality: 'American',
      powers: 'Spider Sense, Super Strength',
    };

    render(
      <Provider store={store}>
        <MemoryRouter>
          <FormModal />
        </MemoryRouter>
      </Provider>,
    );

    const addButton = screen.getByTestId('add-button');

    addButton && fireEvent.click(addButton);

    const form = screen.getByTestId('form');
    const heroNameInput = screen.getByTestId('heroName');
    const realNameInput = screen.getByTestId('realName');
    const studioInput = screen.getByTestId('studio');
    const genderInput = screen.getByTestId('gender');
    const imageInput = screen.getByTestId('image');
    const nationalityInput = screen.getByTestId('nationality');
    const powersInput = screen.getByTestId('powers');

    //* Put Values to form
    fireEvent.change(heroNameInput, { target: { name: 'heroName', value: newHero.heroName } });
    fireEvent.change(realNameInput, { target: { name: 'realName', value: newHero.realName } });
    fireEvent.change(studioInput, { target: { name: 'studio', value: newHero.studio } });
    fireEvent.change(genderInput, { target: { name: 'gender', value: newHero.gender } });
    fireEvent.change(imageInput, { target: { name: 'image', files: [newHero.image] } });
    fireEvent.change(nationalityInput, { target: { name: 'nationality', value: newHero.nationality } });
    fireEvent.change(powersInput, { target: { name: 'powers', value: newHero.powers } });

    //* Submit the form
    fireEvent.submit(form);

    expect(mockStartSavingHero).toHaveBeenCalledWith(newHero);
  });
});

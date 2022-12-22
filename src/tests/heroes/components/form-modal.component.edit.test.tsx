import { describe, test, beforeEach } from 'vitest';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { FormModal } from '../../../heroes/components';
import { authenticatedState, activeHeroState } from '../../fixtures/authenticationStates';
import { authSlice, usersSlice, heroesSlice, startUpdatingHero } from '../../../store';
import { Hero } from '../../../interfaces';

const mockStartUpdatingHero = vi.fn();

vi.mock('../../../store/thunks/heroes.thunks', () => ({
  startUpdatingHero: (formData: Hero) => {
    return () => mockStartUpdatingHero(formData);
  },
}));

vi.mock('react-redux', async () => ({
  ...(await vi.importActual<any>('react-redux')),
  useAppDispatch: () => (fn: any) => fn(),
}));

const store = configureStore({
  reducer: {
    heroes: heroesSlice.reducer,
    auth: authSlice.reducer,
    users: usersSlice.reducer,
  },
  preloadedState: {
    auth: authenticatedState,
    heroes: activeHeroState,
  },
});

describe('<FormModal />', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.restoreAllMocks();
  });

  test('Should show modal with preloaded data', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <FormModal />
        </MemoryRouter>
      </Provider>,
    );

    const {
      heroName, realName, studio,
      gender, nationality, powers,
    } = activeHeroState.activeHero;

    //* Labels
    expect(screen.getByTestId('modal-title').innerHTML).toBe('Update Hero');
    expect(screen.getByTestId('heroNameLabel').innerHTML).toBe('Hero Name');
    expect(screen.getByTestId('realNameLabel').innerHTML).toBe('Real Name');
    expect(screen.getByTestId('studioLabel').innerHTML).toBe('Studio');
    expect(screen.getByTestId('genderLabel').innerHTML).toBe('Gender');
    expect(screen.getByTestId('imageLabel').innerHTML).toBe('Image');
    expect(screen.getByTestId('nationalityLabel').innerHTML).toBe('Nationality');
    expect(screen.getByTestId('powersLabel').innerHTML).toBe('Powers');
    //* Inputs
    expect(screen.getByTestId('heroName')).toHaveValue(heroName);
    expect(screen.getByTestId('realName')).toHaveValue(realName);
    expect(screen.getByTestId('studio')).toHaveValue(studio);
    expect(screen.getByTestId('gender')).toHaveValue(gender);
    expect(screen.getByTestId('nationality')).toHaveValue(nationality);
    expect(screen.getByTestId('powers')).toHaveValue(powers);
  });

  test('Should call startUpdatingHero action', () => {
    const updatedHero = {
      heroName: 'Spiderman',
      realName: 'Miles Morales',
      image: new File(['(⌐□_□)'], 'miles-morales.jpg', { type: 'image/jpeg' }),
      powers: 'Spider Sense, Super Strength, invisibility',
    };

    render(
      <Provider store={store}>
        <MemoryRouter>
          <FormModal />
        </MemoryRouter>
      </Provider>,
    );

    const form = screen.getByTestId('form');
    const heroNameInput = screen.getByTestId('heroName');
    const realNameInput = screen.getByTestId('realName');
    const imageInput = screen.getByTestId('image');
    const powersInput = screen.getByTestId('powers');

    //* Put Values to form
    fireEvent.change(heroNameInput, { target: { name: 'heroName', value: updatedHero.heroName } });
    fireEvent.change(realNameInput, { target: { name: 'realName', value: updatedHero.realName } });
    fireEvent.change(imageInput, { target: { name: 'image', files: [updatedHero.image] } });
    fireEvent.change(powersInput, { target: { name: 'powers', value: updatedHero.powers } });

    //* Submit the form
    fireEvent.submit(form);

    expect(mockStartUpdatingHero).toHaveBeenCalledWith({
      ...activeHeroState.activeHero,
      ...updatedHero,
    });
  });
});

import { describe, test, beforeEach } from 'vitest';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { authSlice, usersSlice, heroesSlice } from '../../../store';
import { authenticatedState, activeHeroState } from '../../fixtures/authenticationStates';
import { ShowHero } from '../../../heroes/components/show-hero.component';

const store = configureStore({
  reducer: {
    heroes: heroesSlice.reducer,
    users: usersSlice.reducer,
    auth: authSlice.reducer,
  },
  preloadedState: {
    auth: authenticatedState,
    heroes: activeHeroState,
  },
});

describe('Tests on <ShowHero />', () => {
  test('Should show modal with data preloaded', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ShowHero />
        </MemoryRouter>
      </Provider>,
    );

    const {
      heroName, realName, studio, gender,
      image: imgSource, nationality, powers,
    } = activeHeroState.activeHero;

    expect(screen.getByTestId('modal-title').innerHTML).toBe('Hero Details');

    expect(screen.getByText('Hero Name')).toBeInTheDocument();
    expect(screen.getByText(heroName)).toBeInTheDocument();

    expect(screen.getByText('Real Name')).toBeInTheDocument();
    expect(screen.getByText(realName)).toBeInTheDocument();

    expect(screen.getByText('Studio')).toBeInTheDocument();
    expect(screen.getByText(studio)).toBeInTheDocument();

    expect(screen.getByText('Gender')).toBeInTheDocument();
    expect(screen.getByText(gender)).toBeInTheDocument();

    expect(screen.getByText('Image')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', imgSource);

    expect(screen.getByText('Nationality')).toBeInTheDocument();
    expect(screen.getByText(nationality)).toBeInTheDocument();

    expect(screen.getByText('Powers')).toBeInTheDocument();
    expect(screen.getByText(powers)).toBeInTheDocument();
  });
  test('Should hide modal if click close button', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ShowHero />
        </MemoryRouter>
      </Provider>,
    );

    const modal = screen.getByTestId('modal');
    const closeBtn = screen.getByTestId('close-btn');

    fireEvent.click(closeBtn);

    expect(modal.parentElement).not.toHaveClass('show');
  });
});

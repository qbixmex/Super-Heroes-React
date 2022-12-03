import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Hero } from '../../interfaces';

export type HeroesState = {
  heroes: Hero[];
  isLoading?: boolean;
  activeHero?: null | Hero;
};

const initialState: HeroesState = {
  heroes: [],
  isLoading: false,
  activeHero: null,
};

export const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    startLoadingHeroes: (state) => {
      state.isLoading = true;
    },
    setHeroes: (state, action: PayloadAction<HeroesState>) => {
      state.isLoading = false;
      state.heroes = action.payload.heroes;
    },
  },
});

export const { startLoadingHeroes, setHeroes } = heroesSlice.actions;

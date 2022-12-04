import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Hero } from '../../interfaces';

export type HeroesState = {
  heroes?: Hero[];
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
    onStartLoadingHeroes: (state) => {
      state.isLoading = true;
    },
    onSetHeroes: (state, action: PayloadAction<HeroesState>) => {
      state.isLoading = false;
      state.heroes = action.payload.heroes;
    },
    onSetActiveHero: (state, action: PayloadAction<HeroesState>) => {
      state.activeHero = action.payload.activeHero;
    },
    onClearActiveHero: (state) => {
      state.activeHero = null;
    },
    onUpdateHeroes: (state, action: PayloadAction<Hero>) => {
      state.heroes?.push({
        _id: action.payload._id,
        heroName: action.payload.heroName,
        realName: action.payload.realName,
        studio: action.payload.studio,
        createdAt: action.payload.createdAt,
        updatedAt: action.payload.updatedAt,
      });
      state.activeHero = null;
    },
    onDeleteHero: (state, action: PayloadAction<{ id: string }>) => {
      state.heroes = state.heroes?.filter(hero => {
        return hero._id !== action.payload.id;
      });
    },
  },
});

export const {
  onStartLoadingHeroes, onSetHeroes, onSetActiveHero, onClearActiveHero,
  onUpdateHeroes, onDeleteHero,
} = heroesSlice.actions;

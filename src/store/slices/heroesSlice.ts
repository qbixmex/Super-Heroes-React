import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Hero } from '../../interfaces';

export type HeroesState = {
  heroes?: Hero[];
  isLoading?: boolean;
  isSaving?: boolean;
  showProfile?: boolean;
  activeHero?: null | Hero;
  formSubmitted?: boolean;
};

const initialState: HeroesState = {
  heroes: [],
  isLoading: false,
  isSaving: false,
  showProfile: false,
  activeHero: null,
  formSubmitted: false,
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
    onSetShowHeroProfile: (state) => {
      state.showProfile = !state.showProfile;
    },
    onClearActiveHero: (state) => {
      state.activeHero = null;
    },
    onSetSavingHero: (state) => {
      state.isSaving = !state.isSaving;
    },
    onCreateHero: (state, action: PayloadAction<Hero>) => {
      state.heroes?.unshift({
        ...action.payload,
      });
      state.activeHero = null;
      state.formSubmitted = true;
      state.isSaving = false;
    },
    onUpdateHero: (state, action: PayloadAction<{ updatedHero: Hero }>) => {
      state.heroes = state.heroes?.map(hero => {
        if (hero._id === action.payload.updatedHero._id) {
          return action.payload.updatedHero;
        }
        return hero;
      });
      state.activeHero = null;
      state.formSubmitted = true;
      state.isSaving = false;
    },
    onDeleteHero: (state, action: PayloadAction<{ id: string }>) => {
      state.heroes = state.heroes?.filter(hero => {
        return hero._id !== action.payload.id;
      });
    },
    onResetHeroFormSubmitted: (state) => {
      state.formSubmitted = false;
    },
    onClearHeroesState: (state) => {
      state.heroes = [];
      state.isLoading = false;
      state.isSaving = false;
      state.showProfile = false;
      state.activeHero = null;
    },
  },
});

export const {
  onStartLoadingHeroes, onSetHeroes, onSetActiveHero, onSetShowHeroProfile,
  onClearActiveHero, onSetSavingHero, onCreateHero, onUpdateHero, onDeleteHero,
  onResetHeroFormSubmitted, onClearHeroesState,
} = heroesSlice.actions;

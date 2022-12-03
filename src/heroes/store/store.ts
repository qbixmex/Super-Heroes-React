import { configureStore } from '@reduxjs/toolkit';
import { heroesSlice } from './heroesSlice';

export const store = configureStore({
  reducer: {
    heroes: heroesSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {heroes: HeroesState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

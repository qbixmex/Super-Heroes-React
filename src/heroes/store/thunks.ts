/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dispatch } from 'redux';
import { getHeroes } from '../api';
import { startLoadingHeroes, setHeroes } from './heroesSlice';
import { RootState as GetState } from './store';

export const fetchHeroes = () => {
  return async (dispatch: Dispatch, _getState: () => GetState) => {
    try {
      dispatch(startLoadingHeroes());
      const data = await getHeroes();
      const heroes = (data.ok) ? data.heroes : [];
      dispatch(setHeroes({ heroes }));
    } catch (error) {
      console.error(error);
    }
  };
};

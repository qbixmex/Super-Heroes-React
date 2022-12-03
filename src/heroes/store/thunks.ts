/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dispatch } from 'redux';
import Swal from 'sweetalert2';
import { getHeroes, createHero } from '../api';
import { startLoadingHeroes, setHeroes, updateHeroes } from './heroesSlice';
import { RootState as GetState } from './store';
import { ApiError, Hero } from '../../interfaces';

export const fetchHeroes = () => {
  return async (dispatch: Dispatch, _getState: () => GetState) => {
    try {
      dispatch(startLoadingHeroes());

      const localHeroes = localStorage.getItem('heroes');

      if (!localHeroes) {
        const data = await getHeroes();
        const heroes = (data.ok) ? data.heroes : [];
        dispatch(setHeroes({ heroes }));
        localStorage.setItem('heroes', JSON.stringify(heroes));
      } else {
        dispatch(setHeroes({ heroes: JSON.parse(localHeroes) }));
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const startSavingHero = (hero: Hero) => {
  return async (dispatch: Dispatch, getState: () => GetState) => {
    try {
      // Call API Endpoint
      const data = await createHero(hero);
      if (data?.hero) {
        dispatch(updateHeroes(data.hero));
        const { heroes } = getState().heroes;
        localStorage.setItem('heroes', JSON.stringify(heroes));
        Swal.fire('OK', 'Hero created successfully', 'success');
      }
    } catch (error) {
      Swal.fire('OK', String(error), 'error');
    }
  };
};

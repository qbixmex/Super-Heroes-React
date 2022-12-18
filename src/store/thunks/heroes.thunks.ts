/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dispatch } from 'redux';
import Swal from 'sweetalert2';
import { getHeroes, createHero, updateHero, deleteHero } from '../../heroes/api';
import {
  onStartLoadingHeroes, onSetHeroes, onCreateHero, onUpdateHero,
  onSetSavingHero, onDeleteHero, onResetHeroFormSubmitted,
} from '../slices/heroesSlice';
import { RootState as GetState } from '../store';
import { Hero } from '../../interfaces';

export const fetchHeroes = () => {
  return async (dispatch: Dispatch, _getState: () => GetState) => {
    try {
      dispatch(onStartLoadingHeroes());

      const localHeroes = localStorage.getItem('heroes');

      if (!localHeroes) {
        const data = await getHeroes();
        const heroes = (data.ok) ? data.heroes : [];
        dispatch(onSetHeroes({ heroes }));
        localStorage.setItem('heroes', JSON.stringify(heroes));
      } else {
        dispatch(onSetHeroes({ heroes: JSON.parse(localHeroes) }));
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const startSavingHero = (hero: Hero) => {
  return async (dispatch: Dispatch, getState: () => GetState) => {
    //* To show spinner feedback to user
    dispatch(onSetSavingHero());
    try {
      //* Call API Endpoint
      const data = await createHero(hero);
      if (data?.hero) {
        //* Add hero to heroes list storage
        dispatch(onCreateHero(data.hero));
        //* Update heroes list to Local Storage
        const { heroes } = getState().heroes;
        localStorage.setItem('heroes', JSON.stringify(heroes));
        //* Show confirmation feedback
        Swal.fire({
          position: 'center',
          title: 'OK',
          html: 'Hero created successfully',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
      }
      setTimeout(() => {
        dispatch(onResetHeroFormSubmitted());
      }, 1600);
    } catch (error) {
      dispatch(onSetSavingHero());
      Swal.fire('Error', String(error), 'error');
    }
  };
};

export const startUpdatingHero = (hero: Hero) => {
  return async (dispatch: Dispatch, getState: () => GetState) => {
    //* To show spinner feedback to user
    dispatch(onSetSavingHero());
    try {
      //* Call API Endpoint
      const data = await updateHero(hero);
      if (data?.hero) {
        //* Update hero to heroes list storage
        dispatch(onUpdateHero({ updatedHero: data.hero }));
        const { heroes } = getState().heroes;
        //* Update hero to heroes list storage
        localStorage.setItem('heroes', JSON.stringify(heroes));
        //* Show confirmation feedback
        Swal.fire({
          position: 'center',
          title: 'OK',
          html: 'Hero updated successfully',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
      }
      setTimeout(() => {
        dispatch(onResetHeroFormSubmitted());
      }, 1600);
    } catch (error) {
      dispatch(onSetSavingHero());
      Swal.fire('Error', String(error), 'error');
    }
  };
};

export const startDeletingHero = (id: string) => {
  return async (dispatch: Dispatch, getState: () => GetState) => {
    try {
      // Call API Endpoint
      const data = await deleteHero(id);
      if (data?.ok) {
        dispatch(onDeleteHero({ id }));
        const { heroes } = getState().heroes;
        localStorage.setItem('heroes', JSON.stringify(heroes));
        //* Launch feedback response from server to user
        Swal.fire({
          position: 'center',
          title: 'OK',
          html: 'Hero deleted successfully',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } catch (error) {
      //* Launch feedback response from server to user
      Swal.fire('Error', String(error), 'error');
    }
  };
};

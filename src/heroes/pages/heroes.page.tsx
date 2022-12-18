import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { FormModal, ShowHero, HeroesList } from '../components';
import { RootState, fetchHeroes } from '../../store';
import { useAppDispatch, useAppSelector } from '../../hooks';

import './heroes.page.css';

export function HeroesPage() {
  const dispatch = useAppDispatch();
  const { heroes, isLoading, isSaving } = useAppSelector((state: RootState) => state.heroes);

  useEffect(() => {
    dispatch(fetchHeroes());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="mt-2 skyblue display-1 text-center">Heroes</h1>
        <hr />
        {
          (isLoading) ? (
            <div className="text-center mt-4">
              <Spinner variant="primary" />
            </div>
          ) : (
            <HeroesList heroes={heroes || []} />
          )
        }
      </div>
      <FormModal />
      <ShowHero />
      {
        (isSaving) && (
          <div className="spinner-wrapper">
            <Spinner variant="info" />
          </div>
        )
      }
    </div>
  );
}

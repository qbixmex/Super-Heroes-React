import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { CreateHero, HeroesList } from '../components';
import { RootState, fetchHeroes } from '../store';
import { useAppDispatch } from '../hooks';

export function HeroesPage() {
  const dispatch = useAppDispatch();
  const { heroes, isLoading } = useSelector((state: RootState) => state.heroes);

  useEffect(() => {
    dispatch(fetchHeroes());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <h1 className="mt-2 skyblue display-1 text-center">Heroes</h1>
        <hr />
        {
          (isLoading) ? (
            <div className="text-center mt-4">
              <Spinner variant="primary" />
            </div>
          ) : (
            <HeroesList heroes={heroes} />
          )
        }
      </div>
      <CreateHero title="Create Hero" />
    </>
  );
}

import { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { CreateHero, HeroesList } from '../components';
import { Hero } from '../../interfaces';
import { getHeroes } from '../../helpers';

export function HeroesPage() {
  const [heroes, setHeroes] = useState<Hero[]>([]);

  useEffect(() => {
    getHeroes()
      .then(data => (data.ok) && setHeroes(data.heroes))
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="mt-2 skyblue display-1 text-center">Heroes</h1>
        <hr />
        {
          (heroes.length !== 0)
            ? <HeroesList heroes={ heroes } />
            : (
              <Alert className="text-center fw-bold" variant="warning">
                No heroes created yet!
              </Alert>
            )
        }
      </div>
      <CreateHero title="Create Hero" />
    </>
  );
}

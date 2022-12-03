import { Hero } from '../../interfaces';

type HeroData = {
  ok: boolean;
  hero: Hero;
};

export async function createHero(formData: Hero): Promise<HeroData> {
  const response = await fetch('http://localhost:3000/api/v1/heroes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  const data = await response.json() as HeroData;
  return data;
}

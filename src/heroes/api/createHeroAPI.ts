import { Hero } from '../../interfaces';

type HeroData = {
  ok: boolean;
  hero: Hero;
};

export async function createHero(formData: Hero): Promise<HeroData | void> {
  const response = await fetch('http://localhost:3000/api/v1/heroes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    const error = await response.json();
    if (error.msg) throw new Error(error.msg);
    if (error.errors) throw new Error(error.errors[0].msg);
  }

  const data = await response.json() as HeroData;
  return data;
}

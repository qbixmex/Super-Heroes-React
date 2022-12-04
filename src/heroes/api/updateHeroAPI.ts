import { Hero } from '../../interfaces';

type HeroData = {
  ok: boolean;
  hero: Hero;
};

export async function updateHero(formData: Hero): Promise<HeroData | void> {
  const response = await fetch(`http://localhost:3000/api/v1/heroes/${formData._id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.errors[0].msg);
  }

  const data = await response.json() as HeroData;
  return data;
}

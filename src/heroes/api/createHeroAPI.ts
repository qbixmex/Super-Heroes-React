import { getEnvironmentVariables } from '../../helpers';
import { Hero } from '../../interfaces';

type HeroData = {
  ok: boolean;
  hero: Hero;
};

const { VITE_API_URL } = getEnvironmentVariables();

export async function createHero(formData: Hero): Promise<HeroData | void> {
  const response = await fetch(`${VITE_API_URL}/heroes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-token': localStorage.getItem('token') ?? '',
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

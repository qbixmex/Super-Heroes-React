import { HeroData } from '../../interfaces';

export async function deleteHero(id: string): Promise<HeroData | void> {
  const response = await fetch(
    `http://localhost:3000/api/v1/heroes/${id}`,
    { method: 'DELETE' },
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.errors[0].msg);
  }

  const data = await response.json() as HeroData;
  return data;
}

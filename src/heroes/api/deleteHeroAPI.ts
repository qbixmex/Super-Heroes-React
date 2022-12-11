import { getEnvironmentVariables } from '../../helpers';
import { HeroData } from '../../interfaces';

const { VITE_API_URL } = getEnvironmentVariables();

export async function deleteHero(id: string): Promise<HeroData | void> {
  const response = await fetch(
    `${VITE_API_URL}/heroes/${id}`,
    {
      method: 'DELETE',
      headers: {
        'x-token': localStorage.getItem('token') ?? '',
      },
    },
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.errors[0].msg);
  }

  const data = await response.json() as HeroData;
  return data;
}

import { getEnvironmentVariables } from '../../helpers';
import { Hero } from '../../interfaces';

type HeroData = {
  ok: boolean;
  hero: Hero;
};

const { VITE_API_URL } = getEnvironmentVariables();

export async function createHero(formData: Hero): Promise<HeroData | void> {
  const dataObject = new FormData();

  dataObject.append('heroName', formData.heroName);
  dataObject.append('realName', formData.realName);
  dataObject.append('studio', formData.studio);
  dataObject.append('gender', formData.gender);
  dataObject.append('image', formData.image!);
  dataObject.append('nationality', formData.nationality);
  dataObject.append('powers', formData.powers);

  const response = await fetch(`${VITE_API_URL}/heroes`, {
    method: 'POST',
    headers: {
      'x-token': localStorage.getItem('token') ?? '',
    },
    body: dataObject,
  });

  if (!response.ok) {
    const error = await response.json();
    if (error.msg) throw new Error(error.msg);
    if (error.errors) throw new Error(error.errors[0].msg);
  }

  const data = await response.json() as HeroData;
  return data;
}

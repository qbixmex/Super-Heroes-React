import { getEnvironmentVariables } from '../../helpers';
import { Hero } from '../../interfaces';

type HeroData = {
  ok: boolean;
  hero: Hero;
};

const { VITE_API_URL } = getEnvironmentVariables();

export async function updateHero(formData: Hero): Promise<HeroData | void> {
  const dataObject = new FormData();

  formData.heroName && dataObject.append('heroName', formData.heroName);
  formData.realName && dataObject.append('realName', formData.realName);
  formData.studio && dataObject.append('studio', formData.studio);
  formData.gender && dataObject.append('gender', formData.gender);
  formData.image && dataObject.append('image', formData.image!);
  formData.nationality && dataObject.append('nationality', formData.nationality);
  formData.powers && dataObject.append('powers', formData.powers);

  const response = await fetch(`${VITE_API_URL}/heroes/${formData._id}`, {
    method: 'PATCH',
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

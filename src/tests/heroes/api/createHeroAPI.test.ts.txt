import { describe, test } from 'vitest';
import { createHero } from '../../../heroes/api';
import { Hero } from '../../../interfaces';

describe('Test on createHero()', () => {
  test('Should create a hero to database', async () => {
    const imageURL = 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=';

    const responseImage = await fetch(imageURL);
    const blob = await responseImage.blob();
    const image = new File([blob], 'she-hulks.jpg');

    const hero: Hero = {
      heroName: 'She Hulk',
      realName: 'Jennifer Walters',
      studio: 'Marvel',
      gender: 'Female',
      image: image as File,
      nationality: 'American',
      powers: 'Strength, Smash',
    };

    const data = await createHero(hero);
    console.log(data);
  });
});

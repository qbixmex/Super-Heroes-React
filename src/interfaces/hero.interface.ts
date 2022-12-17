export interface Hero {
  _id?: string;
  heroName: string;
  realName: string;
  studio: string;
  gender: string;
  image: File | string | null;
  nationality: string;
  powers: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface HeroData {
  ok: boolean;
  hero: Hero;
}

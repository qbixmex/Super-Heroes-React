import { AuthUser } from '../../interfaces';
import { AuthState } from '../../store';

export const authenticatedUser: AuthUser = {
  name: 'Stan Lee',
  uid: '6393606e74e67491aef6bf2c',
};

export const initialState: AuthState = {
  status: 'checking',
  user: null,
  errorMessage: undefined,
};

export const authenticatedState: AuthState = {
  status: 'authenticated',
  user: authenticatedUser,
  errorMessage: undefined,
};

export const activeHeroState = {
  heroes: [],
  isLoading: false,
  isSaving: false,
  showProfile: false,
  activeHero: {
    _id: '6386c276866dc450ba45a133',
    heroName: 'Batman',
    realName: 'Bruce Wayne',
    studio: 'DC',
    createdAt: '2022-11-30T02:39:50.748Z',
    updatedAt: '2022-12-14T18:29:45.265Z',
    gender: 'male',
    image: 'https://res.cloudinary.com/qbixmex/image/upload/v1671042584/heroes/rrrbmbuju3lsin558rl5.webp',
    nationality: 'American',
    powers: 'Intelligence, Money',
  },
  formSubmitted: false,
};

export const notAuthenticatedState: AuthState = {
  status: 'not-authenticated',
  user: null,
  errorMessage: undefined,
};

export interface User {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  role: string;
  password?: string;
  passwordConfirmation?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserData {
  ok: boolean;
  user: User;
}

export interface AuthUser {
  name: string;
  uid: string;
}

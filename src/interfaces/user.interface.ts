export interface User {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  role: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserData {
  ok: boolean;
  user: User;
}
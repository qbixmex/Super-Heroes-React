export interface Login {
  email: string;
  password: string;
}

export interface AuthResponse {
  ok: boolean;
  uid: string;
  name: string;
  token: string;
}

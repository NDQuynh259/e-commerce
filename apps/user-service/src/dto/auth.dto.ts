export interface LoginDto {
  email: string;
  password: string;
}

export interface AuthResponseDto {
  access_token: string;
  user: {
    id: string;
    name: string | null;
    email: string;
  };
}

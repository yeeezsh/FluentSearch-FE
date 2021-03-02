export const USER = 'USER';

export type UserState = {
  id: string;
  username: string;
  displayName: string;
  authenticated: boolean;
  msg?: string;
};

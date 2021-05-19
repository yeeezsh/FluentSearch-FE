import {
  UserPackageEnumSession,
  UserRoleEnumSession,
  UserZoneEnumSession,
} from '../../../../common/generated/generated-types';

export const USER = 'USER';

export type User = {
  id: string;
  name: string;
  mainEmail: string;
  role: UserRoleEnumSession;
  zone: UserZoneEnumSession;
  package: UserPackageEnumSession;
};

export type UserState = {
  user: User;
  authenticated: boolean;
  msg?: string;
};

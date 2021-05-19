import {
  UserPackageEnum,
  UserRoleEnum,
  UserWithId,
  UserZoneEnum,
} from '../../../../common/generated/generated-types';

export const USER = 'USER';

export type User = Omit<UserWithId, 'oauth' | 'password'>;
export type UserState = {
  user: User;
  present: {
    id: string;
    username: string;
    displayName: string;
    role: UserRoleEnum;
    zone: UserZoneEnum;
    package: UserPackageEnum;
  };
  authenticated: boolean;
  msg?: string;
};

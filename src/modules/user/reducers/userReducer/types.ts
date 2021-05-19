import {
  UserPackageEnumSession,
  UserRoleEnumSession,
  UserSessionDto,
  UserZoneEnumSession,
} from '../../../../common/generated/generated-types';

export const USER = 'USER';

export type UserState = {
  user: UserSessionDto;
  present: {
    id: string;
    username: string;
    displayName: string;
    role: UserRoleEnumSession;
    zone: UserZoneEnumSession;
    package: UserPackageEnumSession;
  };
  authenticated: boolean;
  msg?: string;
};

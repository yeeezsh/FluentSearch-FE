import {
  UserPackageEnumSession,
  UserRoleEnumSession,
  UserZoneEnumSession,
} from '../../../../common/generated/generated-types';
import { UserState } from './types';

export const initUserState: UserState = {
  user: {
    id: '',
    mainEmail: '',
    name: '',
    package: UserPackageEnumSession.FreeUser,
    role: UserRoleEnumSession.User,
    zone: UserZoneEnumSession.Th1,
  },
  authenticated: false,
};

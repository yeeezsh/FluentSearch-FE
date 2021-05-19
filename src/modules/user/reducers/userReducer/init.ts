import {
  UserPackageEnumSession,
  UserRoleEnumSession,
  UserZoneEnumSession,
} from '../../../../common/generated/generated-types';
import { UserState } from './types';

export const initUserState: UserState = {
  user: {
    _id: '',
    mainEmail: '',
    name: '',
    package: UserPackageEnumSession.FreeUser,
    role: UserRoleEnumSession.User,
    zone: UserZoneEnumSession.Th1,
  },
  present: {
    id: '',
    username: '',
    displayName: '',
    role: UserRoleEnumSession.User,
    zone: UserZoneEnumSession.Th1,
    package: UserPackageEnumSession.FreeUser,
  },
  authenticated: false,
};

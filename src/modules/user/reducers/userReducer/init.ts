import {
  UserRoleEnum,
  UserPackageEnum,
  UserZoneEnum,
} from '../../../../common/generated/generated-types';
import { UserState } from './types';

export const initUserState: UserState = {
  user: {
    _id: '',
    createDate: '',
    deactivate: false,
    email: [],
    mainEmail: '',
    name: '',
    package: UserPackageEnum.FreeUser,
    role: UserRoleEnum.User,
    updateDate: '',
    zone: UserZoneEnum.Th1,
  },
  present: {
    id: '',
    username: '',
    displayName: '',
    role: UserRoleEnum.User,
    zone: UserZoneEnum.Th1,
    package: UserPackageEnum.FreeUser,
  },
  authenticated: false,
};

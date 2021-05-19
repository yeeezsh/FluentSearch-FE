import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  UserPackageEnum,
  UserRoleEnum,
  UserZoneEnum,
} from '../../../../common/generated/generated-types';
import userReducer, { userActions } from '.';
import { initUserState } from './init';
import { User } from './types';

const rootReducer = combineReducers({
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

describe('user reducer test', () => {
  it('should init user state correctly', () => {
    store.dispatch(userActions.init());
    const result = store.getState().user;
    expect(result).toEqual(initUserState);
  });

  it('should set user correctly', () => {
    const UserData: User = {
      _id: '1',
      createDate: 'Today',
      deactivate: false,
      email: ['john.doe@email.com'],
      mainEmail: 'john.doe@email.com',
      name: 'John Doe',
      package: UserPackageEnum.FreeUser,
      role: UserRoleEnum.User,
      updateDate: 'Today',
      zone: UserZoneEnum.Th1,
    };
    store.dispatch(userActions.setUser(UserData));
    const result = store.getState().user.user;
    expect(result).toEqual(UserData);
  });

  it('should delete user correctly', () => {
    store.dispatch(userActions.deleteUser());
    const result = store.getState().user;
    expect(result).toEqual(initUserState);
  });
});

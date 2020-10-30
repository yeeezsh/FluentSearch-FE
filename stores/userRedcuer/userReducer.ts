import { createReducer } from '@reduxjs/toolkit';
import { initUserState } from './actions';
import { UserState } from './types';

const initState: UserState = {
  id: '',
  username: '',
  displayName: '',
  authenticated: false,
};

const userReducer = createReducer(initState, {
  [initUserState.type]: () => initState,
});

export default userReducer;

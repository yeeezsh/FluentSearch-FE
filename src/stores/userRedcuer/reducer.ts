import { createReducer } from '@reduxjs/toolkit';
import { UserState } from './types';

const initState: UserState = {
  id: '',
  username: '',
  displayName: '',
  authenticated: false,
};

const userReducer = createReducer(initState, {});

export default userReducer;

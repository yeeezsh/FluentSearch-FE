import { createAsyncThunk } from '@reduxjs/toolkit';
import { FormLogin } from 'Modules/user/pages/login/types';
import { RequestToLogin } from 'Modules/user/services';
import { USER } from './types';

export const requestLogin = createAsyncThunk(USER, async (userData: FormLogin) => {
  return { data: RequestToLogin(userData) };
});

import { createAsyncThunk } from '@reduxjs/toolkit';
import { FormLogin } from 'Modules/user/pages/login/types';
import { FormRegister } from 'Modules/user/pages/register/types';
import { RequestToLogin } from 'Modules/user/services/loginAPI.service';
import { Register } from 'Modules/user/services/register';
import { USER } from './types';

export const requestLogin = createAsyncThunk(USER, async (userData: FormLogin) => {
  return { data: await RequestToLogin(userData) };
});

export const register = createAsyncThunk(USER, async (userData: FormRegister) => {
  return { data: await Register(userData) };
});

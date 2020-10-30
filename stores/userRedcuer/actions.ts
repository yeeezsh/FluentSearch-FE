import { createAction } from '@reduxjs/toolkit';

export const INIT_USER = 'USER/INIT';
export const initUserState = createAction(INIT_USER);

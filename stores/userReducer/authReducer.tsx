import { createReducer, createAction } from '@reduxjs/toolkit';

export type LoginAction =
  | { type: 'setEmail'; payload: string }
  | { type: 'setPassword'; payload: string }
  | { type: 'loginSuccess'; payload: string }
  | { type: 'loginFailed'; payload: string }
  | { type: 'setIsError'; payload: boolean };

const setEmail = createAction('SET_EMAIL');
const setPassword = createAction('SET_PASSWORD');
const loginSuccess = createAction('LOGIN_SUCCESS');
const loginFailed = createAction('LOGIN_FAILED');
const setIsError = createAction('SET_IS_ERROR');

export const initialState = {
  email: '',
  password: '',
  isButtonDisabled: true,
  helperText: '',
  isError: false,
};

const authReducer = createReducer(initialState, (builder) => {
  builder.addCase(setEmail, (state, action) => {
    return {
      ...state,
      email: action.payload,
    };
  });

  builder.addCase(setPassword, (state, action) => {
    return {
      ...state,
      password: action.payload,
    };
  });

  builder.addCase(loginSuccess, (state, action) => {
    return {
      ...state,
      helperText: action.payload,
      isError: false,
    };
  });

  builder.addCase(loginFailed, (state, action) => {
    return {
      ...state,
      helperText: action.payload,
      isError: true,
    };
  });

  builder.addCase(setIsError, (state, action) => {
    return {
      ...state,
      isError: action.payload,
    };
  });
});
export default authReducer;

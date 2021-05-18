import { createSlice } from '@reduxjs/toolkit';
import { MSG_INTERNAL_ERROR } from 'Modules/user/services/default.msg';
import { getUser, requestLogin } from './actions';
import { initUserState } from './init';
import { USER } from './types';

const userSlice = createSlice({
  name: USER,
  initialState: initUserState,
  reducers: {
    init(state) {
      return { ...state, ...initUserState };
    },
    setUser(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    deleteUser(state) {
      return { ...state, ...initUserState };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(requestLogin.rejected, (state) => {
      state.authenticated = false;
      state.msg = MSG_INTERNAL_ERROR;
    });
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;

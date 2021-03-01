import { createSlice } from '@reduxjs/toolkit';
import { requestLogin } from './actions';
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
    });
    builder.addCase(requestLogin.pending, (state) => {
      state.authenticated = false;
    });
    builder.addCase(requestLogin.fulfilled, (state, action) => {
      //TODO: Set id, username, displayname
      state.authenticated = true;
    });
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;

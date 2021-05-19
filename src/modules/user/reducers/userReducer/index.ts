import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initUserState } from './init';
import { User, USER } from './types';

const userSlice = createSlice({
  name: USER,
  initialState: initUserState,
  reducers: {
    init(state) {
      return { ...state, ...initUserState };
    },
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    deleteUser(state) {
      return { ...state, ...initUserState };
    },
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;

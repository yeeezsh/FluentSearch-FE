import { createSlice } from '@reduxjs/toolkit';
import { initVideoState } from './init';
import { VIDEO } from './types';

const videoSlice = createSlice({
  name: VIDEO,
  initialState: initVideoState,
  reducers: {
    init(state) {
      return { ...state, ...initVideoState };
    },
  },
});
export default videoSlice.reducer;
export const videoActions = videoSlice.actions;

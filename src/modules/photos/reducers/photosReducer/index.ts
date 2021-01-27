import { createSlice } from '@reduxjs/toolkit';
import { initPhotosState } from './init';
import { PHOTOS } from './types';

export const photosSlice = createSlice({
  name: PHOTOS,
  initialState: initPhotosState,
  reducers: {
    init(state) {
      return { ...state, ...initPhotosState };
    },
  },
});

export default photosSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { initPhotosState } from './init';
import { PHOTOS } from './types';

export const photosSlice = createSlice({
  name: PHOTOS,
  initialState: initPhotosState,
  reducers: {},
});

export default photosSlice.reducer;

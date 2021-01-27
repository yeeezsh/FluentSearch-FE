import { createSlice } from '@reduxjs/toolkit';
import { fetchPhotosData } from './actions';
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
  extraReducers: (builder) => {
    builder.addCase(fetchPhotosData.pending, (state) => {
      state.data.ready = false;
      state.error = undefined;
    });
    builder.addCase(fetchPhotosData.fulfilled, (state, action) => {
      state.data.ready = true;
      state.error = undefined;
      state.data.photos = action.payload.data;
      console.log(action.payload.data);
    });
  },
});

export default photosSlice.reducer;

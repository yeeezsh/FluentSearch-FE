import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Album } from 'Modules/photos/models/album';
import { Photo } from 'Modules/photos/models/photo';
import { ErrorStateCodeEnum } from 'Stores/common/types/error';
import withPayload from 'Stores/common/withPayload';
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
    selectPhotos(state, action: PayloadAction<{ photo: Photo; album: Album }>) {
      state.presentation.views = {
        photo: action.payload.photo,
        album: action.payload.album,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPhotosData.rejected, (state) => {
      state.data.ready = false;
      state = {
        ...state,
        error: {
          code: ErrorStateCodeEnum.ServerInternalError,
          msg: 'api error',
        },
      };
    });
    builder.addCase(fetchPhotosData.pending, (state) => {
      state.data.ready = false;
      state.error = undefined;
    });
    builder.addCase(fetchPhotosData.fulfilled, (state, action) => {
      state.data.ready = true;
      state.error = undefined;
      state.data.photos = action.payload.data;
    });
  },
});

export default photosSlice.reducer;

// workaround bad photosActions export
export const photosActions = photosSlice.actions;

import { createAsyncThunk } from '@reduxjs/toolkit';
import { PhotosAPI } from 'Modules/photos/constants/photo/interface';
import { fetchImages } from 'Modules/photos/services/fetch.images';
import { PHOTOS } from './types';

// TODO: wtf ? not get any id ?
export const fetchPhotosData = createAsyncThunk(PHOTOS, async (id?: string) => {
  return { data: (await fetchImages()).map((el) => ({ ...el, _id: el.id })) } as {
    data: Array<PhotosAPI & { _id: string }>;
  };
});

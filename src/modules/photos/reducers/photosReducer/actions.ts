import { createAsyncThunk } from '@reduxjs/toolkit';
import { Photos } from 'Modules/photos/constants/photo/interface';
import { fetchImages } from 'Modules/photos/services/fetch.images';
import { PHOTOS } from './types';

const mapActionName = (action: string) => `${PHOTOS}/${action}`;

export const fetchPhotosData = createAsyncThunk(
  mapActionName('fetchPhotosData'),
  async (id?: string) => {
    return { data: (await fetchImages()).map((el) => ({ ...el, _id: el.id })) } as {
      data: Array<Photos & { _id: string }>;
    };
  },
);

import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { photosSlice } from '.';
import { PHOTOS } from './types';

export default photosSlice.actions;

const mapActionName = (action: string) => `${PHOTOS}/${action}`;

export const fetchPhotosData = createAsyncThunk(
  mapActionName('fetchPhotosData'),
  async (id?: string) => {
    const fetchImages = async (): Promise<any> => {
      const apiRoot = 'https://api.unsplash.com';
      const accessKey = 'fLLHNmXzlY1Mkc9woN0pQFNNc53hoBfGAgmQTF2OH4w';
      const { data } = await axios.get(
        `${apiRoot}/photos/random?client_id=${accessKey}&count=5`,
      );
      return data;
    };

    return { data: await fetchImages() } as { data: any };
  },
);

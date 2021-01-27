import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchImages } from 'Modules/photos/services/fetch.images';
import { PHOTOS } from './types';

const mapActionName = (action: string) => `${PHOTOS}/${action}`;

export const fetchPhotosData = createAsyncThunk(
  mapActionName('fetchPhotosData'),
  async (id?: string) => {
    return { data: await fetchImages() } as { data: any };
  },
);

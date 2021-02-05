import { PhotoState } from './types';

export const initPhotosState: PhotoState = {
  data: {
    photos: [],
    albums: [],
    ready: false,
  },
  presentation: {},
};

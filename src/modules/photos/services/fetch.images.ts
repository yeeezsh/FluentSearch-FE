import axios from 'axios';
import { PhotosAPI } from '../constants/photo/interface';

export const fetchImages = async (): Promise<PhotosAPI[]> => {
  const apiRoot = 'https://api.unsplash.com';
  const accessKey = 'fLLHNmXzlY1Mkc9woN0pQFNNc53hoBfGAgmQTF2OH4w';
  const { data } = await axios.get(
    `${apiRoot}/photos/random?client_id=${accessKey}&count=5`,
  );
  return data;
};

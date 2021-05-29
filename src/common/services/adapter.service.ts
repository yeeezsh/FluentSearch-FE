import axios, { AxiosInstance } from 'axios';

export const END_POINT =
  process.env.APP_BACKEND_STORAGE_ENDPOINT || 'http://storage.fluentsearch.ml';

class Adapter {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: END_POINT,
      timeout: 60000,
      withCredentials: true,
    });
  }
}

const adapter = new Adapter();

export default adapter;

import axios, { AxiosInstance } from 'axios';

export const END_POINT = process.env.APP_BACKEND_ENDPOINT || 'http://localhost:5000/';

class Adapter {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: END_POINT,
      timeout: 10000,
      withCredentials: true,
    });
  }
}

const adapter = new Adapter();

export default adapter;

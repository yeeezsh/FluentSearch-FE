// import axios from 'axios';
import { DataSource, IDataSource } from '../mocks/data';
// import { HistoryData } from '../pages/types';

// export const fetchHistory = async (): Promise<HistoryData[]> => {
//   const apiRoot = 'https://6019ba397db53900178346f2.mockapi.io/History';
//   const { data } = await axios.get(apiRoot);
//   return data;
// };

export const fetchHistory = (): IDataSource[] => {
  return DataSource;
};
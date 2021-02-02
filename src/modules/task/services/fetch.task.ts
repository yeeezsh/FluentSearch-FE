// import axios from 'axios';
import { DataSource, IDataSource } from '../mocks/data';
// import { TaskData } from '../pages/types';

// export const fetchTask = async (): Promise<TaskData[]> => {
//   const apiRoot = 'https://6019ba397db53900178346f2.mockapi.io/History';
//   const { data } = await axios.get(apiRoot);
//   return data;
// };

export const fetchTask = (): IDataSource[] => {
  return DataSource;
};

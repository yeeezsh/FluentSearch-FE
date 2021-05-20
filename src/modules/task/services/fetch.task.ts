import { DataMock } from '../mocks/mockData';
import { TaskData } from '../reducer/taskReducer/types';

export const fetchTask = (): TaskData[] => {
  return DataMock;
};

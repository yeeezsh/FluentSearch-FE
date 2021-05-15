import { ModelEnum } from 'Modules/task/models/model.enum';
import { ErrorState } from 'Stores/common/types/error';

export const TASK = 'TASK';

export type TaskData = {
  key: string;
  timestamp: string;
  taskID: string;
  taskName: string;
  model: ModelEnum;
  progress: number;
  elaspedTime: string;
  inprogressPhoto: number;
  totalPhoto: number;
};

export type TaskState = {
  data: TaskData[];
  ready: boolean;
  error?: ErrorState;
};

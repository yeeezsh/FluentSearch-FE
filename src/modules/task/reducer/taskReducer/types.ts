import { ModelEnum } from 'Modules/task/models/model.enum';
import { ErrorState } from 'Stores/common/types/error';

export const TASK = 'TASK';

export type TaskData = {
  _id: string;
  timestamp: string;
  taskID: string;
  taskName: string;
  model: ModelEnum;
  progress: number;
  elaspedTime: string;
  inprogressPhoto: number;
  totalPhoto: number;
};

export type TaskStatus = {
  status: 'pause' | 'waiting' | 'cancel' | 'finish' | 'running';
};

export type TaskPresent = TaskData & TaskStatus;

export type TaskState = {
  data: TaskData[];
  present: TaskPresent[];
  ready: boolean;
  error?: ErrorState;
};

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

export enum TaskStatusEnum {
  PAUSE = 'PAUSE',
  WAITING = 'WAITING',
  CANCEL = 'CANCEL',
  FINISH = 'FINISH',
  RUNNING = 'RUNNING',
}

export type TaskStatus = {
  status: TaskStatusEnum;
};

export type TaskPresent = TaskData & TaskStatus;

export type TaskState = {
  data: TaskData[];
  present: {
    queue: TaskPresent[];
  };
  ready: boolean;
  error?: ErrorState;
};

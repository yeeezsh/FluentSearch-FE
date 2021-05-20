import { ErrorState } from 'Stores/common/types/error';
import { ModelEnum } from '../../../../common/services/model/generated-types';

export const TASK = 'TASK';

export type Progress = {
  progress: number;
  elaspedTime?: string;
  inprogressPhoto: number;
  totalPhoto: number;
};

export type TaskData = {
  _id: string;
  timestamp: string;
  taskID: string;
  taskName: string;
  model: ModelEnum;
  progress: Progress;
  status: string;
};

export enum TaskStatusEnum {
  PAUSE = 'PAUSE',
  WAITING = 'WAITING',
  CANCEL = 'CANCEL',
  FINISH = 'FINISH',
  RUNNING = 'RUNNING',
}

export type TaskPresent = TaskData;

export type TaskState = {
  data: TaskData[];
  present: {
    queue: TaskPresent[];
  };
  ready: boolean;
  error?: ErrorState;
};

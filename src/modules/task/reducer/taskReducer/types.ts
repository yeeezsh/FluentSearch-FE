import { ModelEnum } from 'Modules/task/models/model.enum';
import { ErrorState } from 'Stores/common/types/error';
import { TaskStatus } from '../../../../common/generated/generated-types';

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

export type TaskState = {
  data: {
    tasks: TaskStatus[];
    quota: number;
  };
  present: {
    tasks: TaskStatus[];
  };
  ready: boolean;
  error?: ErrorState;
};

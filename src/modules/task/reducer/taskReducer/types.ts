import { ModelEnum } from 'Modules/task/models/model.enum';
import { ErrorState } from 'Stores/common/types/error';

export const TASK = 'TASK';

export type TaskState = {
  data: [
    {
      key: string;
      timestamp: string;
      taskID: string;
      taskName: string;
      model: ModelEnum;
      progress: number;
      elaspedTime: string;
      inprogressPhoto: number;
      totalPhoto: number;
      active: boolean;
    },
  ][];
  ready: boolean;
  error?: ErrorState;
};

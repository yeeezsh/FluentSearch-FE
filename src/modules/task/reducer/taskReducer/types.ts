import { ModelEnum } from 'Modules/task/models/model.enum';
import { ErrorState } from 'Stores/common/types/error';

export const TASK = 'TASK';

export type TaskState = {
  data: [
    {
      key: string;
      timestamp: Date;
      taskID: string;
      taskName: string;
      model: ModelEnum;
      progress: number;
      elaspedTime: Date;
      inprogressPhoto: number;
      totalPhoto: number;
    },
  ][];
  ready: boolean;
  error?: ErrorState;
};

import { ModelEnum } from 'Modules/history/models/model.enum';
import { StatusEnum } from 'Modules/history/models/status.enum';
import { ErrorState } from 'Stores/common/types/error';

export const HISTORY = 'HISTORY';

export type HistoryState = {
  data: {
    key: string;
    taskID: string;
    taskName: string;
    model: ModelEnum;
    startTime: string;
    finishTime: string;
    status: StatusEnum;
    ready: false;
  };
  error?: ErrorState;
};

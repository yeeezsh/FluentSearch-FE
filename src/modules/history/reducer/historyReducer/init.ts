import { ModelEnum } from 'Modules/history/models/model.enum';
import { StatusEnum } from 'Modules/history/models/status.enum';
import { HistoryState } from './types';

export const initHistoryState: HistoryState = {
  data: {
    key: '',
    taskID: '',
    taskName: '',
    model: ModelEnum.RESNET,
    startTime: '',
    finishTime: '',
    status: StatusEnum.FINISH,
    ready: false,
  },
};

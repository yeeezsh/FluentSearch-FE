import { ModelEnum } from '../models/model.enum';
import { StatusEnum } from '../models/status.enum';

export type History = {
  key: string;
  taskID: string;
  taskName: string;
  model: ModelEnum;
  startTime: string;
  finishTime: string;
  status: StatusEnum;
};

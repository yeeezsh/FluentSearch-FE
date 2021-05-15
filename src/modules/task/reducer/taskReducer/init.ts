import { TaskState } from './types';

export const initTaskState: TaskState = {
  data: [],
  present: {
    queue: [],
  },
  ready: false,
};

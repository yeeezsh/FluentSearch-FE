import { TaskState } from './types';

export const initTaskState: TaskState = {
  data: {
    tasks: [],
    quota: 0,
  },
  present: {
    tasks: [],
  },
  ready: false,
};

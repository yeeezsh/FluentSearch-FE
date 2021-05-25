import { UploadTask } from 'Modules/upload/model/types';

export const initUploadState: UploadTask = {
  url: '',
  pendingQueue: [],
  fulfillQueue: [],
  present: {
    current: [],
    group: [],
    progress: -1,
    total: -1,
  },
};

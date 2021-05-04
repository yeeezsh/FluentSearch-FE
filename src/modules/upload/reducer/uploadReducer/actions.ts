import { FileUpload } from 'Modules/upload/model/types';
import { store } from 'Stores/index';

export const uploadFile = async (group: string, type: FileUpload['type']) => {
  const pendingQueue = store
    .getState()
    .upload.pendingQueue.filter((f) => f.group === group);
};

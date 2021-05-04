import { uploadFile } from 'Modules/upload/services/upload.file';
import { store } from 'Stores/index';
import { uploadActions } from '.';

export const uploadFileData = async (group: string): Promise<void> => {
  const pendingQueue = store
    .getState()
    .upload.pendingQueue.filter((f) => f.group === group);

  for (const task of pendingQueue) {
    const id = task._id;
    const pendingQueueFilterID = store
      .getState()
      .upload.pendingQueue.filter((f) => f._id !== id);
    store.dispatch(uploadActions.setPendingQueue(pendingQueueFilterID));

    try {
      await uploadFile(task.file);
      store.dispatch(uploadActions.successUploadFile(task));
    } catch (error) {
      store.dispatch(uploadActions.failureUploadFile(task));
    }
  }
};

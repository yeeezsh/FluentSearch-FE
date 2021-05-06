import { createAsyncThunk } from '@reduxjs/toolkit';
import { UPLOAD } from 'Modules/upload/model/types';
import { requestURL } from 'Modules/upload/services/request.url';
import { uploadFile } from 'Modules/upload/services/upload.file';
import { store } from 'Stores/index';
import { uploadActions } from '.';

export const uploadFileData = async (group: string, files: File[]): Promise<void> => {
  const pendingQueue = store
    .getState()
    .upload.pendingQueue.filter((f) => f.group === group);

  for (const task of pendingQueue) {
    const formData = new FormData();
    const id = task._id;
    const pendingQueueFilterID = store
      .getState()
      .upload.pendingQueue.filter((f) => f._id !== id);
    store.dispatch(uploadActions.setPendingQueue(pendingQueueFilterID));

    const file = files.find((file) => file.name === task.originFilename);
    if (file) formData.append('file', file);
    try {
      await uploadFile(formData);
      store.dispatch(uploadActions.successUploadFile(task));
    } catch (error) {
      store.dispatch(uploadActions.failureUploadFile(task));
    }
  }
};

export const requestURLToUpload = createAsyncThunk(UPLOAD, async () => {
  return { data: await requestURL() };
});

export const getUploadProgress = (): void => {
  const pendingQueue = store.getState().upload.pendingQueue;
  const fulfillQueue = store.getState().upload.fulfillQueue;

  const total = pendingQueue.length + fulfillQueue.length;

  const totalFullfillProgress = fulfillQueue
    .map((el) => el.progress)
    .reduce((acc, cur) => (acc += cur), 0);

  store.dispatch(uploadActions.setProgress(totalFullfillProgress));
  store.dispatch(uploadActions.setProgress(total));

  const allTasks = [...pendingQueue, ...fulfillQueue];
  const groupDistinct = new Set(allTasks.map((el) => el.group));

  const groups = Array.from(groupDistinct).map((groupId) => {
    const allTasksFormGroup = allTasks.filter((f) => f.group);

    const fulfillTaskGroupProgress = allTasksFormGroup
      .filter((f) => f.state === 'failed' || f.state === 'finish' || f.state === 'cancel')
      .map((el) => el.progress)
      .reduce((acc, cur) => (acc += cur), 0);
    return {
      label: groupId,
      progress: fulfillTaskGroupProgress,
      total: allTasksFormGroup.length,
    };
  });
  store.dispatch(uploadActions.setGroup(groups));
};

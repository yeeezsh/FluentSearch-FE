import { FileListResponseDTO } from 'fluentsearch-types';
import { uploadFile } from 'Modules/upload/services/upload.file';
import { store } from 'Stores/index';
import { uploadActions } from '.';

export const uploadFileData = async (
  group: string,
  files: File[],
): Promise<FileListResponseDTO[]> => {
  const pendingQueue = store
    .getState()
    .upload.pendingQueue.filter((f) => f.group === group);

  const formData = new FormData();
  let responseData: FileListResponseDTO[] = [];

  for (const task of pendingQueue) {
    const id = task._id;
    const pendingQueueFilterID = store
      .getState()
      .upload.pendingQueue.filter((f) => f._id !== id);

    if (pendingQueueFilterID)
      store.dispatch(uploadActions.setPendingQueue(pendingQueueFilterID));

    const file = files.find((file) => file.name === task.originFilename);
    if (file) formData.append('files', file);

    try {
      const fileResponse = await uploadFile(formData);
      responseData = fileResponse;
      store.dispatch(uploadActions.successUploadFile(task));
    } catch (error) {
      console.log('error');
      store.dispatch(uploadActions.failureUploadFile(task));
    }
  }
  return responseData;
};

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
    const allTasksFormGroup = allTasks.filter((f) => f.group === groupId);

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

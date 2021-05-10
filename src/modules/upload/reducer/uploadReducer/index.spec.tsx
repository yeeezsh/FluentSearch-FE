import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FileUpload, GroupTask } from 'Modules/upload/model/types';
import uploadReducer, { uploadActions } from '.';
import { initUploadState } from './init';

const rootReducer = combineReducers({
  upload: uploadReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

const mockFile: FileUpload = {
  _id: '1',
  progress: 0,
  originFilename: 'test.jpg',
  createAt: new Date().toString(),
  type: 'single',
  group: 'groupnametest',
  state: 'waiting',
};

const mockGroupTask: GroupTask[] = [
  {
    label: 'group1',
    progress: 1,
    total: 100,
  },
  { label: 'group2', progress: 0, total: 0 },
];

describe('uploadReducer test', () => {
  beforeEach(() => {
    store.dispatch(uploadActions.init());
  });

  it('it should correctly define initial state', () => {
    store.dispatch(uploadActions.init());
    const result = store.getState().upload;
    expect(result).toEqual(initUploadState);
  });

  it('it should set pending queue correctly', () => {
    store.dispatch(uploadActions.setPendingQueue(mockFile));
    const result = store.getState().upload.pendingQueue;
    expect(result).toEqual([mockFile]);
  });

  it('it should set progress correctly', () => {
    store.dispatch(uploadActions.setProgress(5));
    const result = store.getState().upload.present.progress;
    expect(result).toEqual(5);
  });

  it('it should set total correctly', () => {
    store.dispatch(uploadActions.setTotal(5));
    const result = store.getState().upload.present.total;
    expect(result).toEqual(5);
  });

  it('it should set group correctly', () => {
    store.dispatch(uploadActions.setGroup(mockGroupTask));
    const result = store.getState().upload.present.group;
    expect(result).toEqual(mockGroupTask);
  });

  it('it should set success upload correctly', () => {
    store.dispatch(uploadActions.successUploadFile(mockFile));
    const result = store.getState().upload.fulfillQueue;

    expect(result).toEqual([{ ...mockFile, progress: 1, state: 'finish' }]);
  });

  it('it should set failed upload correctly', () => {
    store.dispatch(uploadActions.failureUploadFile(mockFile));
    const result = store.getState().upload.fulfillQueue;
    expect(result).toEqual([{ ...mockFile, state: 'failed' }]);
  });

  it('it should get url correctly', () => {
    const url = 'www.test.com';
    store.dispatch({
      type: requestURLToUpload.fulfilled.type,
      payload: { data: url },
    });
    const result = store.getState().upload.url;
    expect(result).toEqual(url);
  });
});

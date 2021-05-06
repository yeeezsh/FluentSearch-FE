import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FileUpload } from 'Modules/upload/model/types';
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
  createAt: new Date(),
  type: 'single',
  group: 'groupnametest',
  state: 'waiting',
};
describe('uploadReducer test', () => {
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

  it('it should set fulfill queue correctly ', () => {
    store.dispatch(uploadActions.setFulfillQueue(mockFile));
    const result = store.getState().upload.pendingQueue;
    expect(result).toEqual([mockFile]);
  });

  it('it should set progress', () => {
    store.dispatch(uploadActions.setProgress(5));
    const result = store.getState().upload.present.progress;
    expect(result).toEqual(5);
  });
});

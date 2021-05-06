import { combineReducers, configureStore } from '@reduxjs/toolkit';
import uploadReducer, { uploadActions } from '.';
import { initUploadState } from './init';

const rootReducer = combineReducers({
  upload: uploadReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

describe('uploadReducer test', () => {
  it('it should correctly define initial state', () => {
    store.dispatch(uploadActions.init());
    const result = store.getState().upload;
    expect(result).toEqual(initUploadState);
  });
});

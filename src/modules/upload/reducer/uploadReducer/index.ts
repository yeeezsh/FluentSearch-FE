import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FileUpload, UPLOAD, UploadTask } from 'Modules/upload/model/types';
import { requestURLToUpload } from './actions';

import { initUploadState } from './init';

export const uploadReducer = createSlice({
  name: UPLOAD,
  initialState: initUploadState,
  reducers: {
    init(state) {
      return { ...state, ...initUploadState };
    },
    setPendingQueue(state, action: PayloadAction<UploadTask['pendingQueue']>) {
      state.pendingQueue = action.payload;
    },
    setProgress(state, action: PayloadAction<number>) {
      state.present.progress = action.payload;
    },
    successUploadFile(state, action: PayloadAction<FileUpload>) {
      state.fulfillQueue.push({
        ...action.payload,
        state: 'finish',
        progress: 1,
      });
    },
    failureUploadFile(state, action: PayloadAction<FileUpload>) {
      state.fulfillQueue.push({
        ...action.payload,
        state: 'failed',
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      requestURLToUpload.fulfilled,
      (state, action: PayloadAction<{ data: string }>) => {
        state.url = action.payload.data;
      },
    );
  },
});
export default uploadReducer.reducer;
export const uploadActions = uploadReducer.actions;

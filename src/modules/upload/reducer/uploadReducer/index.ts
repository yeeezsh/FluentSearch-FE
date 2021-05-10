import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FileUpload, GroupTask, UPLOAD } from 'Modules/upload/model/types';
import { initUploadState } from './init';

export const uploadReducer = createSlice({
  name: UPLOAD,
  initialState: initUploadState,
  reducers: {
    init(state) {
      return { ...state, ...initUploadState };
    },
    setPendingQueue(state, action: PayloadAction<FileUpload>) {
      state.pendingQueue.push(action.payload);
    },
    setProgress(state, action: PayloadAction<number>) {
      state.present.progress = action.payload;
    },
    setTotal(state, action: PayloadAction<number>) {
      state.present.total = action.payload;
    },
    setGroup(state, action: PayloadAction<GroupTask[]>) {
      state.present.group = action.payload;
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

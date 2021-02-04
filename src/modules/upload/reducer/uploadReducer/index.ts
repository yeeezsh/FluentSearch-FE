import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UPLOAD } from 'Modules/upload/model/types';
import { modifyFiles } from 'Modules/upload/utils/uploadFile.utils';
import { ErrorStateCodeEnum } from 'Stores/common/types/error';
import { uploadPhotoData } from './actions';
import { initUploadDataState } from './init';

interface UploadProgress {
  id: string;
  progress: number;
}

export const uploadReducer = createSlice({
  name: UPLOAD,
  initialState: initUploadDataState,
  reducers: {
    init(state) {
      return { ...state, ...initUploadDataState };
    },
    setUploadFile(state, action) {
      const newData = modifyFiles(state.data.fileProgress, action.payload);
      const existData = state.data.fileProgress;
      const mergeData = [...existData, ...newData];
      state.data.fileProgress = mergeData;
    },
    setUploadProgress(state, action: PayloadAction<UploadProgress>) {
      const { id, progress } = action.payload;
      const file = state.data.fileProgress.find((el, i) => el[i].id === id);
      state.data.fileProgress[file?._id || ''].progress = progress;
    },
    successUploadFile(state, action: PayloadAction<UploadProgress>) {
      const { id } = action.payload;
      const file = state.data.fileProgress.find((el, i) => el[i].id === id);
      state.data.fileProgress[file?._id || ''].status = 1;
    },
    failureUploadFile(state, action) {
      const { id } = action.payload;
      const file = state.data.fileProgress.find((el, i) => el[i].id === id);
      state.data.fileProgress[file?._id || ''].status = 0;
      state.data.fileProgress[file?._id || ''].progress = 0;
    },
    requestToUpload(state, action) {
      const { url } = action.payload;
      state.uploadUrl = url;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(uploadPhotoData.rejected, (state) => {
      state.ready = false;
      state = {
        ...state,
        error: {
          code: ErrorStateCodeEnum.ServerInternalError,
          msg: 'api error',
        },
      };
    });
    builder.addCase(uploadPhotoData.pending, (state) => {
      state.ready = false;
      state.error = undefined;
    });
    builder.addCase(uploadPhotoData.fulfilled, (state, action) => {
      state.ready = true;
      state.error = undefined;
      state.owner = '12323';
      state.data.fileProgress = action.payload.data;
    });
  },
});
export default uploadReducer.reducer;
export const uploadActions = uploadReducer.actions;

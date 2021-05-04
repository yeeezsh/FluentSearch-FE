import { createSlice } from '@reduxjs/toolkit';
import { UPLOAD } from 'Modules/upload/model/types';
import { initUploadState } from './init';

export const uploadReducer = createSlice({
  name: UPLOAD,
  initialState: initUploadState,
  reducers: {
    init(state) {
      return { ...state, ...initUploadState };
    },
    // setUploadFile(state, action: PayloadAction<FileList>) {
    //   const mappedData: fileProgressType[] = [];
    //   Array.from(action.payload).forEach((file, index) =>
    //     mappedData.push({
    //       id: index,
    //       file: file,
    //       progress: 0,
    //       status: 0,
    //     }),
    //   );
    //   const appendedData = [...state.data.fileProgress, ...mappedData];
    //   state.data.fileProgress = appendedData;
    // },
    // setUploadProgress(state, action: PayloadAction<UploadProgress>) {
    //   const { id, progress } = action.payload;
    //   const file = state.data.fileProgress.find((el, i) => el[i].id === id);
    //   state.data.fileProgress[file?._id || ''].progress = progress;
    // },
    // successUploadFile(state, action: PayloadAction<UploadProgress>) {
    //   const { id } = action.payload;
    //   const file = state.data.fileProgress.find((el, i) => el[i].id === id);
    //   state.data.fileProgress[file?._id || ''].status = 1;
    // },
    // failureUploadFile(state, action) {
    //   const { id } = action.payload;
    //   const file = state.data.fileProgress.find((el, i) => el[i].id === id);
    //   state.data.fileProgress[file?._id || ''].status = 0;
    //   state.data.fileProgress[file?._id || ''].progress = 0;
    // },
    // requestToUpload(state, action) {
    //   const { url } = action.payload;
    //   state.uploadUrl = url;
    // },
  },
});
export default uploadReducer.reducer;
export const uploadActions = uploadReducer.actions;

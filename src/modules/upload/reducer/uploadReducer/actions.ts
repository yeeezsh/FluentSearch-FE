import { createAsyncThunk } from '@reduxjs/toolkit';
import { UPLOAD } from 'Modules/upload/model/types';
import { uploadPhoto } from 'Modules/upload/services/upload.photo';

export const uploadPhotoData = createAsyncThunk(UPLOAD, async (fileToUpload) => {
  return { data: await uploadPhoto(fileToUpload) };
});

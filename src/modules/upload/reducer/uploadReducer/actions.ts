import { createAsyncThunk } from '@reduxjs/toolkit';
import { uploadDataType } from 'Modules/upload/components/UploadProgress';
import { UPLOAD } from 'Modules/upload/model/types';
import { uploadPhoto } from 'Modules/upload/services/upload.photo';

export const uploadPhotoData = createAsyncThunk(
  UPLOAD,
  async (dataToUpload: uploadDataType) => {
    return { data: await uploadPhoto(dataToUpload) };
  },
);

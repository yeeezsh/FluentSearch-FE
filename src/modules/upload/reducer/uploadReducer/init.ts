import { UploadDataState } from 'Modules/upload/model/types';

export const initUploadDataState: UploadDataState = {
  owner: '',
  uploadUrl: '',
  data: {
    fileProgress: [],
  },
  ready: false,
};

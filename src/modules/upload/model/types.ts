import { ErrorState } from 'Stores/common/types/error';

export const UPLOAD = 'UPLOAD';

export type fileProgressType = {
  _id: string;
  file: File;
  progress: number;
  status: 0;
};

export type UploadDataState = {
  owner: string;
  uploadUrl: string;
  data: {
    fileProgress: fileProgressType[];
  };
  ready: boolean;
  error?: ErrorState;
};

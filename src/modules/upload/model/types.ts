import { ErrorState } from 'Stores/common/types/error';

export const UPLOAD = 'UPLOAD';

export type UploadDataState = {
  owner: string;
  uploadUrl: string;
  data: [
    {
      id: string;
      file: File;
      progress: number;
    },
  ][];
  ready: boolean;
  error?: ErrorState;
};

export const UPLOAD = 'UPLOAD';

type FileUpload = {
  _id: string;
  progress: number;
  originFilename: string;
  createAt: string;
  type: 'single' | 'multiple';
  group: string;
  state: 'waiting' | 'queue' | 'failed' | 'finish' | 'cancel';
};

type GroupTask = {
  label: string;
  progress: number;
  total: number;
};

type UploadTask = {
  url: string;
  pendingQueue: FileUpload[];
  fulfillQueue: FileUpload[];
  present: {
    current: FileUpload[];
    group: GroupTask[];
    progress: number;
    total: number;
  };
};

type Album = {
  id: string;
  name: string;
  albumFiles: string[];
};

export type { FileUpload, GroupTask, UploadTask, Album };

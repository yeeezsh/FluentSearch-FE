export const UPLOAD = 'UPLOAD';

type FileUpload = {
  _id: string;
  file: FormData;
  progress: number;
  originFilename: string;
  createAt: Date;
  type: 'single' | 'multiple';
  group: string;
  state: 'waiting' | 'queue' | 'failed' | 'finish' | 'cancel';
};

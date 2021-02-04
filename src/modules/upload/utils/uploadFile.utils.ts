import { size } from 'lodash';
import { fileProgressType } from '../model/types';

// TODO: WTF this fn
export const modifyFiles = (
  existingFiles: fileProgressType[],
  files: File[],
): fileProgressType[] => {
  let fileToUpload: fileProgressType[] = [];

  for (let i = 0; i < files.length; i++) {
    const _id = size(existingFiles) + i + 1;

    fileToUpload = [
      ...fileToUpload,
      {
        _id: _id,
        file: files[i],
        progress: 0,
        status: 0,
      },
    ];
  }

  return fileToUpload;
};

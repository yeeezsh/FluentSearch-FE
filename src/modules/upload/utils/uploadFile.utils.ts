import { fileProgressType } from '../model/types';

export const modifyFiles = (
  existingFiles: fileProgressType[],
  files: File[],
): fileProgressType[] => {
  let fileToUpload: fileProgressType[] = [];

  for (let i = 0; i < files.length; i++) {
    const _id = existingFiles.length + i + 1;

    fileToUpload = [
      ...fileToUpload,
      {
        _id: _id.toString(),
        file: files[i],
        progress: 0,
        status: 0,
      },
    ];
  }

  return fileToUpload;
};

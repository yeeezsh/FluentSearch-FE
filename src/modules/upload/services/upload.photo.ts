import axios from 'axios';
import { fileProgressType } from '../model/types';

//TODO: Change to correct type
export const uploadPhoto = async (
  dataToUpload: fileProgressType[],
): Promise<fileProgressType[]> => {
  const files = new FormData();
  dataToUpload.forEach((data) => {
    console.log(data.file);
    files.append('files', data.file);
  });

  const url = 'http://localhost:5000/file';
  const config = {
    headers: {
      'content-type':
        'multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s',
    },
  };
  const data = {
    owner: '343434',
    files: files,
  };
  const response = await axios.post(url, data, config);
  console.log(response);
  return response.data;
};

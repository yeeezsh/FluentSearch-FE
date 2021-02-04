import axios from 'axios';
import { fileProgressType } from '../model/types';

//TODO: Change to correct type
export const uploadPhoto = async (
  dataToUpload: fileProgressType[],
): Promise<fileProgressType[]> => {
  const formData = new FormData();
  dataToUpload.forEach((data) => {
    formData.append('files', data.file);
  });

  //TODO: receive from env
  const url = 'http://localhost:5000/file';

  //TODO: remove owner hardcoded
  formData.append('owner', '1234');

  const response = await axios.post(url, formData, {
    headers: { 'content-type': 'multipart/form-data' },
  });
  console.log(response);
  return response.data;
};

import axios from 'axios';

//TODO: Change to correct type
export const uploadPhoto = async (fileToUpload: any): Promise<any> => {
  const files = new FormData();
  files.append('file', fileToUpload.data);
  const url = 'http://localhost:5000/file';
  const config = {
    headers: {
      'content-type':
        'multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s',
    },
  };
  const data = {
    owner: fileToUpload.owner,
    files: files,
  };
  const response = await axios.post(url, data, config);
  return response.data;
};

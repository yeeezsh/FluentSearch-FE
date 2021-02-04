import axios from 'axios';

//TODO: Change to correct type
export const uploadPhoto = async (formPayload: any): Promise<any> => {
  const response = await axios({
    baseURL: 'https://localhost:5000',
    url: '/file',
    method: 'post',
    data: formPayload,
  });
  return response.data;
};

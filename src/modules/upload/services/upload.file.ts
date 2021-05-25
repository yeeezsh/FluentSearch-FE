import adapter from 'Services/adapter.service';
import { FileListResponseDTO } from 'fluentsearch-types';

export const uploadFile = async (file: FormData): Promise<FileListResponseDTO[]> => {
  const response = await adapter.instance.post('/', file, {
    headers: {
      'content-type': 'multipart/form-data',
    },
  });
  return response.data;
};

import adapter from 'Services/adapter.service';

export const uploadFile = async (file: FormData): Promise<void> => {
  await adapter.instance.post('/file', file, {
    headers: { 'content-type': 'multipart/form-data' },
  });
};

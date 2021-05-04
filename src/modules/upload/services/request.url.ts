import adapter from 'Services/adapter.service';

export const requestURL = async (): Promise<string> => {
  //TODO: change path file
  const res = await adapter.instance.post('/file');
  return res.data;
};

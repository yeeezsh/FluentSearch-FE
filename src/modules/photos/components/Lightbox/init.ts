import { FileInsight } from './types';

export const initState: FileInsight = {
  fileMeta: {
    _id: '',
    uri: '',
    uri_thumbnail: '',
    meta: {
      size: 0,
      extension: '',
      contentType: '',
      width: 0,
      height: 0,
    },
  },
  insights: [],
};

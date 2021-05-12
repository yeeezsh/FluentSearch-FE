import { initVideoStateType } from './types';

export const initVideoState: initVideoStateType = {
  videoFile: {
    originalFileName: '',
    url: '',
    delete: false,
    size: 0,
    type: 'undefined',
    format: 'undefined',
    width: 0,
    height: 0,
    incidents: [],
    date: '',
    place: '',
  },
  present: {
    metaData: {
      originalFileName: '',
      size: 0,
      type: 'undefined',
      format: 'undefined',
      width: 0,
      height: 0,
      date: '',
      place: '',
    },
    person: [],
    label: [],
    player: {
      muted: false,
      playing: false,
      volume: 50 / 100,
      playbackRate: '1.0',
      seeking: false,
      duration: 0,
      played: 0,
      fullscreen: false,
    },
  },
  ready: false,
};

import { MediaFormat, MediaType } from 'Modules/videos/models/types';
import { initVideoStateType } from './types';

export const initVideoState: initVideoStateType = {
  file: {
    originalFileName: '',
    delete: false,
    size: '',
    type: MediaType.IMAGE,
    format: MediaFormat.JPG,
    width: 0,
    height: 0,
    incidents: [],
  },
  present: {
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
};

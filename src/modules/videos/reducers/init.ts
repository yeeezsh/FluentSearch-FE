import { initVideoStateType } from './types';

export const initVideoState: initVideoStateType = {
  muted: false,
  playing: false,
  volume: 50 / 100,
  playbackRate: '1.0',
  seeking: false,
  duration: 0,
  played: 0,
};

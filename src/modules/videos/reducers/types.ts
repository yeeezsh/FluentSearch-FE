type initVideoPlayerStateType = {
  muted: boolean;
  playing: boolean;
  volume: number;
  playbackRate: '0.5' | '0.75' | '1.0' | '1.5' | '2.0';
  seeking: boolean;
  duration: number;
  played: number;
};

export type { initVideoPlayerStateType };

type VideoPlayerStateType = {
  muted: boolean;
  isPlaying: boolean;
  volume: number;
  playbackRate: string;
  isSeeking: boolean;
  duration: number;
  played: number;
};

type ProgressState = {
  loaded: number;
  loadedSeconds: number;
  played: number;
  playedSeconds: number;
};

export type { VideoPlayerStateType, ProgressState };

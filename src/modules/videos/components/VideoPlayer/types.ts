type VideoPlayerPropsType = {
  url: string;
  muted: boolean;
  isPlaying: boolean;
  volume: number;
  playbackRate: string;
  handleProgress: () => void;
};

export type { VideoPlayerPropsType };

import { ProgressState } from 'Modules/videos/models/types';

type VideoPlayerPropsType = {
  url: string;
  muted: boolean;
  isPlaying: boolean;
  volume: number;
  playbackRate: string;
  handleProgress: (changeState: ProgressState) => void;
};

export type { VideoPlayerPropsType };

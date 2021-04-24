import ReactPlayer from 'react-player';

type VideoPlayerPropsType = {
  url: string;
  muted: boolean;
  isPlaying: boolean;
  volume: number;
  playbackRate: string;
  handleProgress: () => void;
  playerRef: React.Ref<ReactPlayer>;
};

export type { VideoPlayerPropsType };

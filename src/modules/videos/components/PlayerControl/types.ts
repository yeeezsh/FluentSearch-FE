import { VideoPlayerStateType } from 'Modules/videos/containers/VideoPlayerContainer/types';

type PlayerControlPropsType = VideoPlayerStateType & {
  onPlaying: () => void;
  onFastForward: () => void;
  onRewind: () => void;
  onMute: () => void;
};

export type { PlayerControlPropsType };

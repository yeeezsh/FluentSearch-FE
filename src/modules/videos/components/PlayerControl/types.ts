import { React } from '@ungap/global-this';
import { VideoPlayerStateType } from 'Modules/videos/containers/VideoPlayerContainer/types';
import { PlaybackRateType } from 'Modules/videos/reducers/videoReducer/types';

type PlayerControlPropsType = VideoPlayerStateType & {
  onPlaying: () => void;
  onFastForward: () => void;
  onRewind: () => void;
  onMute: () => void;
  onMouseDown: () => void;
  onMouseUp: () => void;
  onVideoSliderChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleFullScreen: () => void;
  onPlaybackRateChange: (value: PlaybackRateType) => void;
};

export type { PlayerControlPropsType };

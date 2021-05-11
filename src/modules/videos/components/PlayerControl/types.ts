import { React } from '@ungap/global-this';
import { PlaybackRate, VideoState } from 'Modules/videos/models/types';

type ControlWrapperPropsType = {
  fullscreen: boolean;
};

type PlayerControlPropsType = VideoState & {
  onPlaying: () => void;
  onFastForward: () => void;
  onRewind: () => void;
  onMute: () => void;
  onVideoSliderChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleFullScreen: () => void;
  onPlaybackRateChange: (value: PlaybackRate) => void;
  onMouseUp: () => void;
  onMouseDown: () => void;
};

export type { PlayerControlPropsType, ControlWrapperPropsType };

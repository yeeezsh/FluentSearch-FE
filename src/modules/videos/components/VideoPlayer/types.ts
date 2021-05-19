import { AnnotationResultType, ProgressState } from 'Modules/videos/models/types';

type VideoPlayerPropsType = {
  url: string;
  muted: boolean;
  isPlaying: boolean;
  volume: number;
  playbackRate: string;
  handleProgress: (changeState: ProgressState) => void;
  canvasWidth: number;
  canvasHeight: number;
  videoHeight: number;
  videoWidth: number;
  incidentData: AnnotationResultType[];
  played: number;
  duration: number;
  selectedLabel: string;
};

export type { VideoPlayerPropsType };

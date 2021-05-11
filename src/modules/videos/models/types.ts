type VideoState = {
  muted: boolean;
  playing: boolean;
  volume: number;
  playbackRate: PlaybackRate;
  seeking: boolean;
  duration: number;
  played: number;
  fullscreen: boolean;
};

type ProgressState = {
  loaded: number;
  loadedSeconds: number;
  played: number;
  playedSeconds: number;
};

type PlaybackRate = '0.5' | '0.75' | '1.0' | '1.5' | '2.0';

enum MediaType {
  VIDEO = 'video',
  IMAGE = 'image',
}

enum MediaFormat {
  MP4 = '.mp4',
  JPG = '.jpg',
}

type AnnotaionType = {
  id: string;
  label: string;
  startTime?: number;
  endTime?: number;
  incidents: IncidentType[];
  src: string;
  selected: false;
};

type IncidentType = {
  x: number;
  y: number;
  height: number;
  width: number;
  nthFps: number;
  finish: boolean;
};

export type { VideoState, ProgressState, PlaybackRate, AnnotaionType, IncidentType };
export { MediaType, MediaFormat };

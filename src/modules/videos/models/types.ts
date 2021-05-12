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

type MediaType = 'video' | 'image' | 'undefined';

type MediaFormat = '.mp4' | '.jpg' | 'undefined';

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

type VideoFileType = {
  originalFileName: string;
  url: string;
  type: MediaType;
  format: MediaFormat;
  width: number;
  height: number;
  date: string;
  place: string;
  delete: boolean;
  size: number;
  incidents: AnnotaionType[];
};

type MetaDataType = Omit<VideoFileType, 'delete' | 'incidents' | 'url'>;

export type {
  VideoState,
  ProgressState,
  PlaybackRate,
  AnnotaionType,
  IncidentType,
  MediaType,
  MediaFormat,
  VideoFileType,
  MetaDataType,
};

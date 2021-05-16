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

type PersonPresentType = {
  _id?: string;
  label?: string;
  uri: string;
  nFps: number;
  selected: boolean;
};

type LabelPresentType = {
  cat: string;
  selected: boolean;
  nFps: number[];
};

type IncidentType = {
  bbox: BoundingBoxType;
  last?: boolean;
  prob: number;
  cat: string;
};

type AnnotationResultType = {
  _id?: string;
  classes: IncidentType[];
  uri: string;
  nFps: number;
};

type BoundingBoxType = {
  xmax: number;
  ymax: number;
  ymin: number;
  xmin: number;
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
  deleteFlag: boolean;
  size: number;
};

type MetaDataType = Omit<VideoFileType, 'deleteFlag' | 'incidents' | 'url'>;

export type {
  VideoState,
  ProgressState,
  PlaybackRate,
  PersonPresentType,
  LabelPresentType,
  AnnotationResultType,
  IncidentType,
  MediaType,
  MediaFormat,
  VideoFileType,
  MetaDataType,
  BoundingBoxType,
};

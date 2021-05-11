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

export type { VideoState, ProgressState, PlaybackRate };
export { MediaType, MediaFormat };

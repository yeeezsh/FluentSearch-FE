type PlaybackRateType = '0.5' | '0.75' | '1.0' | '1.5' | '2.0';

type VideoState = {
  present: {
    muted: boolean;
    playing: boolean;
    volume: number;
    playbackRate: PlaybackRateType;
    seeking: boolean;
    duration: number;
    played: number;
  };
};

const VIDEO = 'VIDEO';

export type { VideoState, PlaybackRateType };
export { VIDEO };

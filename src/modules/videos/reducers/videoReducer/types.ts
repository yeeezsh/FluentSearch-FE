import {
  AnnotaionType,
  MediaFormat,
  MediaType,
  VideoState,
} from 'Modules/videos/models/types';

const VIDEO = 'VIDEO';

type initVideoStateType = {
  file: {
    originalFileName: string;
    delete: boolean;
    size: number;
    type: MediaType;
    format: MediaFormat;
    width: number;
    height: number;
    incidents: AnnotaionType[];
  };
  present: {
    person: AnnotaionType[];
    label: AnnotaionType[];
    player: VideoState;
  };
};

export { VIDEO };
export type { initVideoStateType };

import { AnnotaionType, VideoFileType, VideoState } from 'Modules/videos/models/types';

const VIDEO = 'VIDEO';

type initVideoStateType = {
  videoFile: VideoFileType;
  present: {
    person: AnnotaionType[];
    label: AnnotaionType[];
    player: VideoState;
  };
};

export { VIDEO };
export type { initVideoStateType };

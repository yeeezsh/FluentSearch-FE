import {
  AnnotaionType,
  MetaDataType,
  VideoFileType,
  VideoState,
} from 'Modules/videos/models/types';

const VIDEO = 'VIDEO';

type initVideoStateType = {
  videoFile: VideoFileType;
  present: {
    metaData: MetaDataType;
    person: AnnotaionType[];
    label: AnnotaionType[];
    player: VideoState;
  };
};

export { VIDEO };
export type { initVideoStateType };

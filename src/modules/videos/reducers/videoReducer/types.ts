import {
  AnnotaionType,
  MetaDataType,
  VideoFileType,
  VideoState,
} from 'Modules/videos/models/types';
import { ErrorState } from 'Stores/common/types/error';

const VIDEO = 'VIDEO';

type initVideoStateType = {
  videoFile: VideoFileType;
  present: {
    metaData: MetaDataType;
    person: AnnotaionType[];
    label: AnnotaionType[];
    player: VideoState;
  };
  ready: boolean;
  error?: ErrorState;
};

export { VIDEO };
export type { initVideoStateType };

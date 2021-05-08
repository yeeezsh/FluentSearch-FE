import { GroupTask } from 'Modules/upload/model/types';

type UploadItemProps = {
  file: {
    file: GroupTask;
  };
};

type ProgressBarPropsType = {
  width: number;
};

export type { UploadItemProps, ProgressBarPropsType };

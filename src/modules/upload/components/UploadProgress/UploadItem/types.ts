import { GroupTask } from 'Modules/upload/model/types';

type UploadItemProps = {
  file: {
    file: GroupTask;
    progress: number;
  };
};

export type { UploadItemProps };

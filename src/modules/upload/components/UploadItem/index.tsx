import React from 'react';
import { WrapperItem, LeftSide, ProgressBar, Percentage } from './styled';

type UploadItemProps = {
  file: {
    file: FileType;
    progress: number;
  };
};

type FileType = {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
};

const UploadItem: React.FC<UploadItemProps> = (props) => {
  const { file, progress } = props.file;
  return file ? (
    <WrapperItem>
      <LeftSide>
        <ProgressBar>
          <div style={{ width: `${progress}%` }} />
          <label>{file.name}</label>
        </ProgressBar>
      </LeftSide>
      <Percentage>{progress}</Percentage>
    </WrapperItem>
  ) : null;
};

export default UploadItem;

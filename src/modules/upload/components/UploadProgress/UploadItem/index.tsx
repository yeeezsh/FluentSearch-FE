import React from 'react';
import { WrapperItem, LeftSide, ProgressBar, Percentage } from './styled';
import { UploadItemProps } from './types';

const UploadItem: React.FC<UploadItemProps> = (props) => {
  const { file, progress } = props.file;
  return file ? (
    <WrapperItem>
      <LeftSide>
        <ProgressBar>
          <div style={{ width: `${progress}%` }} />
          <label>{file.label}</label>
        </ProgressBar>
      </LeftSide>
      <Percentage>{progress}</Percentage>
    </WrapperItem>
  ) : null;
};

export default UploadItem;

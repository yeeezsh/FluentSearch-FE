import React from 'react';
import { WrapperItem, LeftSide, ProgressBar, Percentage } from './styled';
import { UploadItemProps } from './types';

const UploadItem: React.FC<UploadItemProps> = (props) => {
  const { file } = props.file;
  return file ? (
    <WrapperItem>
      <LeftSide>
        <ProgressBar>
          <div style={{ width: `${file.progress}%` }} />
          <label>{file.label}</label>
        </ProgressBar>
      </LeftSide>
      <Percentage>{file.progress}</Percentage>
    </WrapperItem>
  ) : null;
};

export default UploadItem;

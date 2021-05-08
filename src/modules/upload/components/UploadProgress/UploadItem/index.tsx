import React from 'react';
import { WrapperItem, LeftSide, ProgressBarWrapper, Percentage } from './styled';
import { UploadItemProps } from './types';

const UploadItem: React.FC<UploadItemProps> = (props) => {
  const { file } = props.file;
  return file ? (
    <WrapperItem>
      <LeftSide>
        <ProgressBarWrapper>
          <div style={{ width: `${file.progress}%` }} />
          <label>{file.label}</label>
        </ProgressBarWrapper>
      </LeftSide>
      <Percentage>{file.progress}</Percentage>
    </WrapperItem>
  ) : null;
};

export default UploadItem;

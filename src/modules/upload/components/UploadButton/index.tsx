import React from 'react';
import { LabelUpload } from './styled';
import { UploadButtonPropsType } from './types';

const UploadButton: React.FC<UploadButtonPropsType> = (props) => {
  const { onFileOnChange } = props;
  return (
    <>
      <input
        type="file"
        name="file"
        id="upload"
        multiple
        hidden
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onFileOnChange(e)}
      />
      <LabelUpload htmlFor="upload">+ Select Photos</LabelUpload>
    </>
  );
};

export default UploadButton;

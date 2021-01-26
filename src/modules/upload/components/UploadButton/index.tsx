import React from 'react';
import { UploadBtnWrapper } from './styled';
import { PictureOutlined } from '@ant-design/icons';

const UploadButton: React.FC = () => {
  return (
    <UploadBtnWrapper>
      <input type="file" name="file" id="file" multiple />
      <label htmlFor="file">
        + &nbsp; &nbsp; &nbsp;
        <PictureOutlined /> &nbsp; &nbsp; Select Photos
      </label>
    </UploadBtnWrapper>
  );
};

export default UploadButton;

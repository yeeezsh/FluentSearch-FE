import React from 'react';
import { UploadBtnWrapper } from './styled';
import { PictureOutlined } from '@ant-design/icons';

type UploadButtonPropsType = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const UploadButton: React.FC<UploadButtonPropsType> = (props) => {
  const { onChange } = props;
  return (
    <UploadBtnWrapper>
      <input type="file" name="file" id="file" multiple onChange={onChange} />
      <label htmlFor="file">
        {/* //TODO: wtf &nbsp */}
        + &nbsp; &nbsp; &nbsp;
        <PictureOutlined /> &nbsp; &nbsp; Select Photos
      </label>
    </UploadBtnWrapper>
  );
};

export default UploadButton;

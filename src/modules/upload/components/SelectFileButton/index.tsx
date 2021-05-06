import React from 'react';
import { IconWrapper, Wrapper } from './styled';
import { PictureOutlined } from '@ant-design/icons';
import { SelectFileButtonPropsType } from './type';

const SelectFileButton: React.FC<SelectFileButtonPropsType> = (props) => {
  const { onChange } = props;
  return (
    <Wrapper>
      <input type="file" name="file" id="file" multiple onChange={onChange} />
      <label htmlFor="file">
        {'+'}
        <IconWrapper>
          <PictureOutlined />
        </IconWrapper>
        Select Photos
      </label>
    </Wrapper>
  );
};

export default SelectFileButton;

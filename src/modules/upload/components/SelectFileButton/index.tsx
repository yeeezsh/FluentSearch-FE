import React from 'react';
import { Wrapper } from './styled';
import { PictureOutlined } from '@ant-design/icons';
import { SelectFileButtonPropsType } from './type';

const SelectFileButton: React.FC<SelectFileButtonPropsType> = (props) => {
  const { onChange } = props;
  return (
    <Wrapper>
      <input type="file" name="file" id="file" multiple onChange={onChange} />
      <label htmlFor="file">
        {/* //TODO: wtf &nbsp */}
        + &nbsp; &nbsp; &nbsp;
        <PictureOutlined /> &nbsp; &nbsp; Select Photos
      </label>
    </Wrapper>
  );
};

export default SelectFileButton;

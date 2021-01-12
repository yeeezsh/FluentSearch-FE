import React, { useState } from 'react';
import SelectIcon from './SelectIcon';
import {
  PhotoDisplayStyled,
  PhotoWrapperStyled,
  SelectIconWrapperLayoutStyled,
} from './styled';
import { Props } from './types';

const Photo: React.FC<Props> = (props) => {
  const { selected } = props;
  const [hover, setHover] = useState<boolean>(selected);

  const onHover = (isHover: boolean) => {
    setHover(isHover);
  };
  return (
    <PhotoWrapperStyled
      onMouseOver={() => onHover(true)}
      onMouseLeave={() => onHover(false)}>
      <SelectIconWrapperLayoutStyled>
        <SelectIcon hover={hover} selected={selected} />
      </SelectIconWrapperLayoutStyled>
      <PhotoDisplayStyled src="https://cdn.pixabay.com/photo/2015/07/31/14/59/beach-869195_1280.jpg" />
    </PhotoWrapperStyled>
  );
};

export default Photo;

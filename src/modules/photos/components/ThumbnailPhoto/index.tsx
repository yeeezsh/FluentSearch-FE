import React, { useState } from 'react';
import SelectIcon from './SelectIcon';
import {
  ThumbnailPhotoDisplayStyled,
  ThumbnailPhotoWrapperStyled,
  ThumbnailSelectIconWrapperLayoutStyled,
} from './styled';
import { Props } from './types';

const ThumbnailPhoto: React.FC<Props> = (props) => {
  const { selected } = props;
  const [hover, setHover] = useState<boolean>(selected);

  const onHover = (isHover: boolean) => {
    setHover(isHover);
  };

  const onSelect = (s) => {
    props.onSelect && props.onSelect(s);
  };

  return (
    <ThumbnailPhotoWrapperStyled
      onMouseOver={() => onHover(true)}
      onMouseLeave={() => onHover(false)}>
      <ThumbnailSelectIconWrapperLayoutStyled>
        <SelectIcon hover={hover} selected={selected} onSelect={onSelect} />
      </ThumbnailSelectIconWrapperLayoutStyled>
      <ThumbnailPhotoDisplayStyled src="https://cdn.pixabay.com/photo/2015/07/31/14/59/beach-869195_1280.jpg" />
    </ThumbnailPhotoWrapperStyled>
  );
};

export default ThumbnailPhoto;

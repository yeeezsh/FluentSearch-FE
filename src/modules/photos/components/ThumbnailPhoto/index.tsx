import React, { useState } from 'react';
import SelectIcon from './SelectIcon';
import {
  ThumbnailPhotoDisplayStyled,
  ThumbnailPhotoWrapperStyled,
  ThumbnailSelectIconWrapperLayoutStyled,
} from './styled';
import { Props } from './types';

const ThumbnailPhoto: React.FC<Props> = (props) => {
  const { selected, src } = props;
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
      <ThumbnailPhotoDisplayStyled src={src} />
    </ThumbnailPhotoWrapperStyled>
  );
};

export default ThumbnailPhoto;

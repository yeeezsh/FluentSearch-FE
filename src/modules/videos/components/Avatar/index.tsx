import React from 'react';
import { AvatarWrapper } from './styled';
import { AvatarPropsType } from './types';

const Avatar: React.FC<AvatarPropsType> = (props) => {
  const { selected = false, src } = props;
  return (
    <AvatarWrapper
      size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
      src={src}
      alt=""
      selected={selected}
    />
  );
};

export default Avatar;

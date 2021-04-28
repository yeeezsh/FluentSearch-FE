import React from 'react';
import { AvatarWrapper } from './styled';
import { AvatarPropsType } from './types';

const Avatar: React.FC<AvatarPropsType> = (props) => {
  const { selected, src } = props;
  return <AvatarWrapper src={src} alt="" selected={selected} />;
};

export default Avatar;

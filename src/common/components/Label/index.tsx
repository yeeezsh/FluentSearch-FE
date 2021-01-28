import React from 'react';
import { LabelStyle } from './styled';
import { LabelProps } from './types';

const Label: React.FC<LabelProps> = (props) => {
  const { color, children } = props;
  return <LabelStyle color={color}>{children}</LabelStyle>;
};

export default Label;

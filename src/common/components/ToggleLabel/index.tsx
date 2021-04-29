import React from 'react';
import { ToggelLabelWrapper } from './styled';
import { ToggleLabelProps } from './types';

const ToggleLabel: React.FC<ToggleLabelProps> = (props) => {
  const { children, selected = false } = props;
  return <ToggelLabelWrapper selected={selected}>{children}</ToggelLabelWrapper>;
};

export default ToggleLabel;

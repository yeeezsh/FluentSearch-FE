import React from 'react';
import { ToggelLabelWrapper } from './styled';
import { ToggleLabelProps } from './types';

const ToggleLabel: React.FC<ToggleLabelProps> = (props) => {
  const { children, selected = false, onClick } = props;
  return (
    <ToggelLabelWrapper selected={selected} onClick={() => onClick}>
      {children}
    </ToggelLabelWrapper>
  );
};

export default ToggleLabel;

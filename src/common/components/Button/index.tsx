import { ButtonStyle } from 'Components/Button/styled';
import { ButtonComponentProps } from 'Components/Button/types';
import React from 'react';

const Button: React.FC<ButtonComponentProps> = (props) => {
  const { children, style, color, size } = props;

  return (
    <ButtonStyle color={color} size={size} style={style}>
      {children}
    </ButtonStyle>
  );
};

export default Button;

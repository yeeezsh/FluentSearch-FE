import { CustomButton } from 'Components/Button/Button.styled';
import { ButtonComponentProps } from 'Components/Button/button.type';
import React from 'react';

const Button: React.FC<ButtonComponentProps> = (props) => {
  const { children, style, color, size } = props;

  return (
    <CustomButton color={color} size={size} style={style}>
      {children}
    </CustomButton>
  );
};

export default Button;

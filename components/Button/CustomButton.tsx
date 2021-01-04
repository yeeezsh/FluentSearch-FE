import { Button } from 'Components/Button/Button.styled';
import { ButtonComponentProps } from 'Components/Button/button.type';
import React from 'react';

const CustomButton: React.FC<ButtonComponentProps> = (props) => {
  const { children, style, color, size } = props;

  return (
    <Button color={color} size={size} style={style}>
      {children}
    </Button>
  );
};

export default CustomButton;

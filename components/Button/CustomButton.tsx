import { Button } from 'Components/Button/Button.styled';
import { ButtonComponentProps } from 'Components/Button/button.type';
import React from 'react';

const CustomButton: React.FC<ButtonComponentProps> = (props) => {
  const { children, style, typeButton, size } = props;

  return (
    <Button color={typeButton} size={size} style={style}>
      {children}
    </Button>
  );
};

export default CustomButton;

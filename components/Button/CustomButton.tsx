import { ButtonComponentProps } from 'Models/button/button.type';
import React from 'react';
import styled from 'styled-components';

const handleColorType = (color) => {
  switch (color) {
    case 'primary':
      return `
      background: #0BB5C2; 
      color: #fff;
      &:hover {
        background: #48CDD8;
      }
      `;
    case 'secondary':
      return `
      background: #fff; 
      color: #0BB5C2;
      border: 1px solid #0BB5C2;
      &:hover {
        color: #48CDD8;
        border: 1px solid #48CDD8;
      }
    `;
    case 'danger':
      return `
      background: #EB5757; 
      color: #fff;
      &:hover {
        background: #F07979;
      }
    `;
    case 'success':
      return `
      background: #27AE60; 
      color: #fff;
      &:hover {
        background: #6FCF97;
      }
    `;
    case 'disable':
      return `
      background: #F2F2F2; 
      color: #BDBDBD;
      border: 1px solid #BDBDBD;
      &:hover {
        cursor: not-allowed;
      }
    `;
    default:
      return '#fff';
  }
};

const handleSizeType = (size) => {
  switch (size) {
    case 'small':
      return `
      font-size: 12px;
      padding: 10px 16px;
      `;
    case 'medium':
      return `
      font-size: 14px;
      padding: 11px 20px;
    `;
    case 'large':
      return `
      font-size: 16px;
      padding: 12px 24px;
    `;
    default:
      return `
      font-size: 14px;
      padding: 11px 20px;
    `;
  }
};

const Button = styled.button<ButtonComponentProps>`
  border-radius: 100px;
  border: 0px;
  ${({ color }) => handleColorType(color)};
  ${({ size }) => handleSizeType(size)};
  cursor: pointer;
  font-weight: bold;
`;

const CustomButton: React.FC<ButtonComponentProps> = (props) => {
  const { children, style, typeButton, size } = props;

  return (
    <Button color={typeButton} size={size} style={style}>
      {children}
    </Button>
  );
};

export default CustomButton;

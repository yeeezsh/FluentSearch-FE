import React from 'react';
import styled from 'styled-components';

interface Style {
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'disable';
}

export type ButtonComponentProps = {
  children?: HTMLCollection | string;
  onClick?: (e?: React.MouseEvent) => void;
  typeButton?: Style['type'];
  style?: React.CSSProperties;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

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
      background: ##fff; 
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

const Button = styled.button<ButtonComponentProps>`
  border-radius: 100px;
  border: 0px;
  ${({ color }) => handleColorType(color)};
  margin: 0 1em;
  padding: 0.5em 4em;
  cursor: pointer;
`;

const CustomButton: React.FC<ButtonComponentProps> = (props) => {
  const { children, style, typeButton } = props;

  return (
    <Button color={typeButton} style={style}>
      {children}
    </Button>
  );
};

export default CustomButton;

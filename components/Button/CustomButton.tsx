import React from 'react';
import styled, { css } from 'styled-components';

interface Style {
  type?: 'primary' | 'Secondary' | 'Success' | 'Danger' | 'Disable';
}

export type ButtonComponentProps = {
  children?: HTMLCollection | string;
  onClick?: (e?: React.MouseEvent) => void;
  primary?: boolean;
  type?: Style['type'];
  style?: React.CSSProperties;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = styled.button<ButtonComponentProps>`
  background: blue;
  border-radius: 100px;
  border: 0px;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.5em 2em;

  ${(props) =>
    props.primary &&
    css`
      background: blue;
      color: white;

      &:hover {
        background-color: red;
      }
    `};
`;

const CustomButton: React.FC<ButtonComponentProps> = (props) => {
  const { children, primary, style } = props;

  return (
    <Button primary={primary} style={style}>
      {children}
    </Button>
  );
};

export default CustomButton;

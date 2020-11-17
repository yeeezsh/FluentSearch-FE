/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ButtonComponentProps } from 'Components/Button/button.type';
import styled, { css } from 'styled-components';

export const handleColorType = (color?: ButtonComponentProps['style']) => {
  switch (color) {
    case 'primary':
      return css`
        background: #0bb5c2;
        color: #fff;
        &:hover {
          background: #48cdd8;
        }
      `;
    case 'secondary':
      return css`
        background: #fff;
        color: #0bb5c2;
        border: 1px solid #0bb5c2;
        &:hover {
          color: #48cdd8;
          border: 1px solid #48cdd8;
        }
      `;
    case 'danger':
      return css`
        background: #eb5757;
        color: #fff;
        &:hover {
          background: #f07979;
        }
      `;
    case 'success':
      return css`
        background: #27ae60;
        color: #fff;
        &:hover {
          background: #6fcf97;
        }
      `;
    case 'disable':
      return css`
        background: #f2f2f2;
        color: #bdbdbd;
        border: 1px solid #bdbdbd;
        &:hover {
          cursor: not-allowed;
        }
      `;
    default:
      return css`
        color: white;
      `;
  }
};

export const handleSizeType = (size?: ButtonComponentProps['size']) => {
  switch (size) {
    case 'small':
      return css`
        font-size: 12px;
        padding: 10px 16px;
      `;
    case 'medium':
      return css`
        font-size: 14px;
        padding: 11px 20px;
      `;
    case 'large':
      return css`
        font-size: 16px;
        padding: 12px 24px;
      `;
    default:
      return css`
        font-size: 14px;
        padding: 11px 20px;
      `;
  }
};

export const Button = styled.button<ButtonComponentProps>`
  border-radius: 100px;
  border: 0px;
  ${({ style }) => handleColorType(style)};
  ${({ size }) => handleSizeType(size)};
  cursor: pointer;
  font-weight: bold;
  &:focus {
    outline: 0;
    box-shadow: none !important;
  }
`;

import { ButtonComponentProps } from 'Components/Button/button.type';
import styled, { css } from 'styled-components';

const handleColorType = (color?: ButtonComponentProps['color']) => {
  switch (color) {
    case 'secondary':
      return css`
        background-color: #fff;
        color: #0bb5c2;
        border: 1px solid #0bb5c2;
        &:hover {
          color: #48cdd8;
          border: 1px solid #48cdd8;
        }
      `;
    case 'danger':
      return css`
        background-color: #eb5757;
        color: #fff;
        &:hover {
          background-color: #f07979;
        }
      `;
    case 'success':
      return css`
        background-color: #27ae60;
        color: #fff;
        &:hover {
          background-color: #6fcf97;
        }
      `;
    case 'disable':
      return css`
        background-color: #f2f2f2;
        color: #bdbdbd;
        border: 1px solid #bdbdbd;
        &:hover {
          cursor: not-allowed;
        }
      `;
    // default -> primary
    default:
      return css`
        background-color: #0bb5c2;
        color: #fff;
        &:hover {
          background-color: #48cdd8;
        }
      `;
  }
};

const handleSizeType = (size?: ButtonComponentProps['size']) => {
  switch (size) {
    case 'small':
      return css`
        font-size: 12px;
        padding: 10px 16px;
      `;
    case 'large':
      return css`
        font-size: 16px;
        padding: 12px 24px;
      `;
    // default -> medium
    default:
      return css`
        font-size: 14px;
        padding: 11px 20px;
      `;
  }
};

export const CustomButton = styled.button<ButtonComponentProps>`
  border-radius: 100px;
  border: 0px;
  ${({ color }) => handleColorType(color)};
  ${({ size }) => handleSizeType(size)};
  cursor: pointer;
  font-weight: bold;
  &:focus {
    outline: 0;
    box-shadow: none !important;
  }
`;

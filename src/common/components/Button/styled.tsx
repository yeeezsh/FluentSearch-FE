import { ButtonComponentProps } from 'Components/Button/types';
import styled, { css } from 'styled-components';

const colorMapping = (color?: ButtonComponentProps['color']) => {
  switch (color) {
    case 'secondary':
      return css`
        background-color: #fff;
        color: var(--green-color);
        border: 1px solid var(--green-color);
        &:hover {
          color: var(--light-green-color);
          border: 1px solid var(--light-green-color);
        }
      `;
    case 'danger':
      return css`
        background-color: var(--error-color);
        color: #fff;
        &:hover {
          background-color: var(--light-error-color);
        }
      `;
    case 'success':
      return css`
        background-color: var(--success-color);
        color: #fff;
        &:hover {
          background-color: var(--light-success-color);
        }
      `;
    case 'disable':
      return css`
        background-color: var(--gray-color);
        color: var(--dark-gray-color);
        border: 1px solid var(--dark-gray-color);
        &:hover {
          cursor: not-allowed;
        }
      `;
    // default -> primary
    default:
      return css`
        background-color: var(--green-color);
        color: #fff;
        &:hover {
          background-color: var(--light-green-color);
        }
      `;
  }
};

const sizeMapping = (size?: ButtonComponentProps['size']) => {
  switch (size) {
    case 'small':
      return css`
        font-size: var(--small-body);
        padding: 10px 16px;
      `;
    case 'large':
      return css`
        font-size: var(--h5);
        padding: 12px 24px;
      `;
    // default -> medium
    default:
      return css`
        font-size: var(--body);
        padding: 11px 20px;
      `;
  }
};

export const ButtonStyle = styled.button<ButtonComponentProps>`
  border-radius: 100px;
  border: 0px;
  ${({ color }) => colorMapping(color)};
  ${({ size }) => sizeMapping(size)};
  cursor: pointer;
  font-weight: bold;
  &:focus {
    outline: 0;
    box-shadow: none !important;
  }
`;

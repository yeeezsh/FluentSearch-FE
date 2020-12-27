import styled, { css } from 'styled-components';

export const HR = styled.hr`
  border: none;
  background-color: lightgray;
  height: 1px;
`;

interface Align {
  type?: 'center' | 'left' | 'right';
}

export type PComponentProps = {
  align?: Align['type'];
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export const handleAlignType = (align?: PComponentProps['align']) => {
  switch (align) {
    case 'center':
      return css`
        text-align: center;
      `;
    case 'right':
      return css`
        text-align: right;
      `;
    case 'left':
      return css`
        text-align: left;
      `;
    default:
      return css`
        text-align: center;
      `;
  }
};

export const P = styled.p<PComponentProps>`
  ${({ align }) => handleAlignType(align)};
  color: darkgray;
`;

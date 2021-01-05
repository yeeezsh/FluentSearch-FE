import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`;

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

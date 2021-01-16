import 'antd/dist/antd.css';
import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  hr {
    border: none;
    background-color: lightgray;
    height: 1px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1 {
    font-size: 3.052em;
  }

  h2 {
    font-size: 2.441em;
  }

  h3 {
    font-size: 1.953em;
  }

  h4 {
    font-size: 1.563em;
  }

  h5 {
    font-size: 1.25em;
  }

  body,span,p {
    // 16px
    font-size: 1em;
  }
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

const handleAlignType = (align?: PComponentProps['align']) => {
  switch (align) {
    case 'right':
      return css`
        text-align: right;
      `;
    case 'left':
      return css`
        text-align: left;
      `;
    default:
      // 'center
      return css`
        text-align: center;
      `;
  }
};

export const P = styled.p<PComponentProps>`
  ${({ align }) => handleAlignType(align)};
  color: darkgray;
`;

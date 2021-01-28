import 'antd/dist/antd.css';
import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
  }

  :root {
      //COLORS
    --primary-color: #4425A7;
    --secondary-color: #5A36CC;
    --link-color: #4425A7;
    --success-color: #27AE60;
    --light-success-color: #6fcf97;
    --warning-color: #FF8863;
    --error-color: #EB5757;
    --light-error-color: #f07979;
    --tertiary-color: #E1D8FF;
    --green-color: #0BB5C2;
    --light-green-color: #48cdd8;
    --red-color: #EB5757;
    --light-gray-color: lightgray;
    --gray-color: #F2F2F2;
    --dark-gray-color: #BDBDBD;

    //FONTS
    --font-size-base: 16px;
    --font-size-sm: 14px
    --font-size-lg: 18px
    --text-color: #4F4F4F;
    --text-color-secondary: #88888D;
    --h1: 3.052rem;
    --h2:2.441rem;
    --h3:1.953rem;
    --h4:1.563rem;
    --h5: 1.25rem;
    --body: 16px; 
    --small-body: 0.8rem;
    --caption: 0.64rem;
    
    --box-shadow-base: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    --border-radius-base: 8px;
    --border-radius-round: 100px;

    // LAYOUT BREAKPOINT 
    --xs: 480px;
    --sm: 576px;
    --md: 768px;
    --lg: 992px;
    --xl: 1200px;
    --xxl: 1600px;
  }


  body {
    padding: 0 !important;
    margin: 0 !important;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  hr {
    border: none;
    background-color: var(--light-gray-color);
    height: 1px;
  }

  h1 {
    font-size: var(--h1);
    font-weight: bold;
    color: var(--text-color);
  }

  h2 {
    font-size: var(--h2);
    font-weight: bold;
    color: var(--text-color);
  }

  h3 {
    font-size: var(--h3);
    font-weight: bold;
    color: var(--text-color);
  }

  h4 {
    font-size: var(--h4);
    font-weight: bold;
    color: var(--text-color);
  }

  h5 {
    font-size: var(--h5);
    font-weight: bold;
    color: var(--text-color);
  }

  span,p, body {
    font-size: var(--body);
    color: var(--text-color);
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

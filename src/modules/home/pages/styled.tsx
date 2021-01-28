import styled, { CSSProperties } from 'styled-components';

export const Icon = styled.div`
  .anticon {
    padding-top: 1rem;
    font-size: 3rem;
  }
`;

export const gridStyle: CSSProperties = {
  textAlign: 'center',
};

export const CanvasWrapper = styled.div`
  background-image: url('https://pbs.twimg.com/media/ElVxJ8OWMAAnew5.jpg');
  height: 50%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
`;

export const HeaderWrapper = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
  text-align: center;
  color: white;
`;

export const Heading = styled.div`
  font-size: 5rem;
  font-weight: bold;
`;

export const SubHeading = styled.div`
  font-size: 2rem;
  margin-top: -1rem;
  margin-bottom: 1.5rem;
`;

export const HomeTempWrapper = styled.div`
  background-image: url('/assets/images/bg-login-only.png');
  background-size: cover;
  height: 100vh;
`;

import styled, { CSSProperties } from 'styled-components';

export const Icon = styled.div`
  font-size: 40px;
`;

export const gridStyle: CSSProperties = {
  textAlign: 'center',
};

export const CanvasWrapper = styled.div`
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;

  width: 100vw;
  height: 50vh;
  display: flex;

  background-image: url('https://pbs.twimg.com/media/ElVxJ8OWMAAnew5.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const HeaderWrapper = styled.div`
  width: 100vw;
  height: 28vh;
`;

export const Heading = styled.div`
  flex-basis: 100%;
  font-size: 5em;
  color: #ffffff;
`;

export const SubHeading = styled.div`
  flex-basis: 100%;
  font-size: 2em;
  color: #ffffff;
  margin-bottom: 28px;
`;
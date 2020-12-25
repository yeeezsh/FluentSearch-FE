import styled from 'styled-components';

export const ContainerLeft = styled.div`
  left: 0;
  background: #4425a7;
  height: 100vh;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;

  img {
    height: 100%;
    position: relative;
  }
`;

export const ContainerRight = styled.div`
  right: 0;
  background: #fff;
  height: 100vh;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 21%;
`;

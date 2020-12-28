import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  height: 100vh;
  background: white;
  img {
    width: 100%;
    height: 100vh;
  }
`;

export const FormContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 991px) {
    top: 50%;
    left: 0%;
    transform: translate(0%, 50%);
  }
`;

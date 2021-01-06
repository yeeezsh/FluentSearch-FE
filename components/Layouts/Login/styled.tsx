import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  height: 100vh;
  background: white;
  img {
    width: 100%;
  }
`;

export const FormContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 25%;
  transform: translateY(50%);

  @media (max-width: 991px) {
    top: 50%;
    transform: translate(0%, 50%);
  }
`;

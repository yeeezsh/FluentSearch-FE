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
  width: 100%;
  height: 100vh;
  transform: translateY(25%);

  @media (max-width: 991px) {
    top: 50%;
    transform: translateY(25%);
  }
`;

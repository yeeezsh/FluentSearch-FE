import styled from 'styled-components';

export const LightboxWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: gray;
`;

export const LightboxCard = styled.div`
  display: flex;
  flex-direction: row;
  top: 50%;
  left: 50%;
  width: 80%;
  height: auto;
  transform: translate(-50%, -50%);
  position: fixed;
  box-shadow: var(--box-shadow);
`;

export const LightboxCardLeft = styled.div`
  width: 50%;
  position: relative;
  background-color: black;
  height: 80vh;
  display: flex;
  align-items: center;
  transition: width 2s;
`;

export const LightboxCardRight = styled.div``;

export const DetailCard = styled.div``;

export const OptionWrapper = styled.div``;

export const ButtonLeft = styled.button``;

export const ButtonRight = styled.button``;

export const ImageWrapper = styled.div``;

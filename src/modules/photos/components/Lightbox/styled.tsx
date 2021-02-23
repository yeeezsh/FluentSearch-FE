import styled from 'styled-components';

export const LightboxWrapper = styled.div`
  //TODO: Change z-index
  z-index: 1000;
  position: absolute;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(31, 28, 28, 0.5);
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

export const LightboxCardRight = styled.div`
  background-color: white;
  padding-left: 5%;
  padding-top: 5%;
  width: 50%;
`;

export const DetailCard = styled.div``;

export const OptionWrapper = styled.div`
  position: absolute;
  display: block;
  top: 5%;
  right: 5%;
`;

export const ButtonLeft = styled.button`
  display: block;
  position: absolute;
  left: 3%;
  max-height: 50px;
  max-width: 50px;
  top: 50%;
  z-index: 1;
  background-color: red;
  padding: 0.5rem 1rem 0.5rem 1rem;
  color: white;
  transform: translateY(-50%);
  border-radius: 100%;
  text-decoration: none;
`;

export const ButtonRight = styled.button`
  display: block;
  max-height: 50px;
  max-width: 50px;
  padding: 0.5rem 1rem 0.5rem 1rem;
  position: absolute;
  top: 50%;
  z-index: 1;
  color: white;
  right: 3%;
  transform: translateY(-50%);
  background-color: red;
  border-radius: 100%;
  text-decoration: none;
`;

export const ImageWrapper = styled.div`
  position: relative;
  img {
    width: 100%;
  }
`;

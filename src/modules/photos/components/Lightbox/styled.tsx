import styled, { css } from 'styled-components';

interface ILightboxCardLeft {
  half: boolean;
}

export const Overlay = styled.div`
  background-color: rgba(31, 28, 28, 0.5);
  width: 100%;
  height: 100%;
`;

export const LightboxWrapper = styled.div`
  //TODO: Change z-index
  z-index: 1000;
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  button:hover {
    cursor: pointer;
    background: rgba(172, 170, 170, 0.5);
  }
  button:focus {
    box-shadow: none;
    border-color: transparent;
    outline: 0;
  }
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

export const LightboxCardLeft = styled.div<ILightboxCardLeft>`
  width: 100%;
  transition: width 2s;
  position: relative;
  background-color: black;
  height: 80vh;
  display: flex;
  align-items: center;

  ${(props) =>
    props.half &&
    css`
      width: 50%;
      position: relative;
      background-color: black;
      height: 80vh;
      display: flex;
      align-items: center;
    `}
`;

export const LightboxCardRight = styled.div`
  background-color: white;
  padding: 5%;
  width: 50%;
`;

export const OptionWrapper = styled.div`
  position: absolute;
  display: flex;
  top: 5%;
  right: 5%;
`;

export const ButtonLeft = styled.button`
  z-index: 1;
  display: block;
  max-height: 50px;
  max-width: 50px;
  padding: 0.5rem 1rem 0.5rem 1rem;
  position: absolute;
  left: 3%;
  top: 50%;
  font-size: 1rem;
  width: 100%;
  height: 100%;
  color: white;
  background: rgba(129, 129, 129, 0.5);
  border-radius: 100%;
  text-decoration: none;
  border: 0;
`;

export const ButtonRight = styled.button`
  z-index: 1;
  max-height: 50px;
  max-width: 50px;
  padding: 0.5rem 1rem 0.5rem 1rem;
  position: absolute;
  top: 50%;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  color: white;
  right: 3%;
  transform: translateY(-50%);
  background: rgba(129, 129, 129, 0.5);
  border-radius: 100%;
  text-decoration: none;
  border: 0;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const InfoButton = styled.button`
  span {
    font-size: 1.5rem;
  }
  color: white;
  z-index: 1;
  background-color: transparent;
  text-decoration: none;
  border: 0;
  right: 50%;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  position: absolute;
`;

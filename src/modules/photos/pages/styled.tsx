import styled from 'styled-components';

export const PrevButton = styled.button`
  display: inline-block;
  height: 50px;
  width: 50px;
  position: absolute;
  border-radius: 100%;
  font-size: 1rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  top: 50%;
  left: 5%;
  background: rgba(129, 129, 129, 0.5);
  color: white;
  text-decoration: none;
  border: 0px;
`;
export const NextButton = styled.button`
  display: inline-block;
  height: 50px;
  width: 50px;
  position: absolute;
  border-radius: 100%;
  font-size: 1rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  top: 50%;
  left: 50%;
  background: rgba(129, 129, 129, 0.5);
  color: white;
  text-decoration: none;
  border: 0px;
`;
export const LightboxWrapper = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(31, 28, 28, 0.5);
  display: flex;
  align-items: center;
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

export const ImageLightbox = styled.div`
  background-color: black;
  justify-content: center;
  height: 80vh;
  width: 300%;
  text-align: center;
  display: block;
  /*TODO: change to style components  */
  #lightbox-img {
    height: 100%;
    max-width: 100%;
    object-fit: contain;
  }
`;

export const ContentLightbox = styled.div`
  width: 100%;
  padding: 5%;
`;

export const Wrapper = styled.div`
  width: 80%;
  background-color: white;
  border-radius: 8px;
  top: 0;
  left: 0;
  transform: translateX(13%);
  display: flex;
`;

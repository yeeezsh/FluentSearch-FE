import styled from 'styled-components';
import { ControlWrapperPropsType } from './types';

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

export const ControlWrapper = styled.div<ControlWrapperPropsType>`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  top: 20%;
  padding-bottom: 5%;
  ${(props) =>
    props.fullscreen &&
    `
  padding-bottom: 0%;
  `}
`;

export const ControlIcons = styled.div`
  color: #777;
  transform: scale(0.9);
  span {
    font-size: 3rem;
  }
  &:hover {
    color: #fff;
    transform: scale(1);
  }
`;

export const BottomControlWrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const BottomIcons = styled.div`
  color: #999;
  span {
    font-size: 1.25rem;
  }

  &:hover {
    color: #fff;
  }
`;

export const VolumeSliderWrapper = styled.div`
  width: 100%;
`;

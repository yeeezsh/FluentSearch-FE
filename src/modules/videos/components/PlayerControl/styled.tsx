import styled from 'styled-components';

export const ControlWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
`;

export const ControlIcons = styled.div`
  color: #777;
  font-size: 50px;
  transform: scale(0.9);
  &:hover {
    color: #fff;
    transform: scale(1);
  }
`;

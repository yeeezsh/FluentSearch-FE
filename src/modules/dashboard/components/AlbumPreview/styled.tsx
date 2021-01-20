import styled from 'styled-components';
import { Tag } from 'antd';

export const AlbumWrapper = styled.div`
  img {
    border-radius: 8px;
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: 0.5s ease;
    backface-visibility: hidden;
  }
`;

export const Label = styled(Tag)`
  border-radius: 100px;
  font-size: 0.8rem !important;
`;

export const Container = styled.div`
  position: relative;

  &:hover img {
    opacity: 0.3;
    cursor: pointer;
  }

  &:hover #text {
    cursor: pointer;
    opacity: 1;
  }
`;

export const Text = styled.div`
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  opacity: 0;
`;

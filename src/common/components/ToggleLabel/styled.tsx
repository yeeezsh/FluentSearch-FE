import styled from 'styled-components';
import { Tag } from 'antd';
import { ToggleLabelWrapperProps } from './types';

export const ToggelLabelWrapper = styled(Tag)<ToggleLabelWrapperProps>`
  border-radius: 100px;
  font-size: var(--small-body);
  padding: 0em 1.25em 0em 1.25em;
  background-color: white;
  color: #5a36cc;
  border: 1px solid #5a36cc;
  ${(props) =>
    props.selected &&
    `background-color: #5A36CC;
    color: white;
    `}
  &:hover {
    background-color: #f8eafa;
    color: #5a36cc;
    cursor: pointer;
  }
`;

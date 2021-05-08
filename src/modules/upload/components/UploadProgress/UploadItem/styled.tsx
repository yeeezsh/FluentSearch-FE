import styled from 'styled-components';
import { ProgressBarPropsType } from './types';

export const WrapperItem = styled.div`
  display: grid;
  grid-template-columns: calc(100% - 50px) 50px;
  padding: 16px;
  box-shadow: 0px 1px 2px lightgray;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 8px;

  label {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
  }
`;

export const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 15px;
  background-color: lightgray;
  margin-bottom: 8px;
  border-radius: 20px;

  div {
    height: 15px;
    background-color: lightgreen;
    border-radius: 20px;
  }
`;

export const Percentage = styled.span`
  margin-left: 12px;
`;

export const ProgressBar = styled.div<ProgressBarPropsType>`
  ${(props) =>
    props.width &&
    `
   width: ${props.width}%`}
`;

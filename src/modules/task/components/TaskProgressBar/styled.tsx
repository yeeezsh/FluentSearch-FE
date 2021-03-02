import { Progress } from 'antd';
import styled, { css } from 'styled-components';

interface IPausePlayButton {
  active: boolean;
}

export const ProgressBar = styled(Progress)`
  .ant-progress-inner {
    background-color: #e1d8ff;
  }

  .ant-progress-success-bg,
  .ant-progress-bg {
    background-color: var(--secondary-color);
  }
`;

export const Caption = styled.p`
  font-size: 0.8rem;
  margin: 0;
`;

export const TaskProgressBarWrapper = styled.div`
  text-align: center;
  align-items: center;
  display: inline-block;
`;

export const PausePlayButton = styled.button<IPausePlayButton>`
  text-decoration: none;
  background-color: var(--secondary-color);
  color: white;
  max-height: 30px;
  display: inline-block;
  max-width: 30px;
  padding: 0.25rem 1rem 1rem 0.5rem;
  border-radius: 100%;
  border: none;
  ${(props) =>
    props.active &&
    css`
      display: inline-block;
      text-decoration: none;
      padding: 0.5rem 1rem 0.5rem 1rem;
      max-height: 30px;
      max-width: 30px;
      border-radius: 100%;
      background-color: var(--green-color);
      border: none;
    `};
`;

export const StopButton = styled.button`
  display: inline-block;
  text-decoration: none;
  color: var(--red-color);
  background-color: transparent;
  border: none;
`;

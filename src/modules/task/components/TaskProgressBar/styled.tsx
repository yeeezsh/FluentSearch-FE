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

export const Wrapper = styled.div`
  display: flex;
  margin: 0% 10% 0% 10%;
  justify-content: center;
`;

export const PausePlayButton = styled.button<IPausePlayButton>`
  text-decoration: none;
  background-color: var(--secondary-color);
  color: white;
  max-height: 30px;
  display: inline-block;
  margin: 1rem 1rem 0rem 2rem;
  max-width: 30px;
  padding: 0.25rem 1rem 1rem 0.5rem;
  border-radius: 100%;
  border-color: transparent;
  border: none;
  box-shadow: none;
  &:focus {
    outline: 0;
  }
  &:hover {
    cursor: pointer;
  }
  ${(props) =>
    props.active &&
    css`
      border-color: transparent;
      display: inline-block;
      text-decoration: none;
      padding: 0.5rem 1rem 0.5rem 1rem;
      max-height: 30px;
      max-width: 30px;
      border-radius: 100%;
      background-color: var(--green-color);
      box-shadow: none;
      &:focus {
        outline: 0;
      }
      &:hover {
        cursor: pointer;
      }
    `};
`;

export const StopButton = styled.button`
  display: inline-block;
  text-decoration: none;
  color: var(--red-color);
  box-shadow: none;
  border-color: transparent;
  background-color: transparent;
  &:focus {
    outline: 0;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const ProgressBarWrapper = styled.div`
  display: inline-block;
  width: 50%;
`;

export const ButtonWrapper = styled.div`
  display: inline-block;
  height: 100%;
`;

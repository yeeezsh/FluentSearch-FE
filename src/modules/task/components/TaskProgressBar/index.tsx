import React from 'react';
import dayjs from 'dayjs';
import {
  Caption,
  ProgressBar,
  Wrapper,
  ButtonWrapper,
  ProgressBarWrapper,
} from './styled';
import { CloseOutlined, PauseOutlined, CaretRightOutlined } from '@ant-design/icons';
import { PausePlayButton, StopButton } from './styled';

type TaskProgressBarType = {
  taskID: string;
  progress: number;
  elaspedTime: Date;
  inprogressPhoto: number;
  totalPhoto: number;
  active: boolean;
};

const TaskProgressBar: React.FC<TaskProgressBarType> = (props) => {
  const { progress, elaspedTime, inprogressPhoto, totalPhoto, active, taskID } = props;
  return (
    <Wrapper>
      <ProgressBarWrapper>
        <Caption>elasped time {dayjs(elaspedTime).format('HH:mm:ss')} </Caption>
        <ProgressBar percent={progress} />
        <Caption>
          {inprogressPhoto} of {totalPhoto} photos
        </Caption>
      </ProgressBarWrapper>
      <ButtonWrapper>
        <PausePlayButton active={active}>
          {active ? (
            <PauseOutlined
              onClick={() => {
                console.log({ taskID });
              }}
            />
          ) : (
            <CaretRightOutlined
              onClick={() => {
                console.log({ taskID });
              }}
            />
          )}
        </PausePlayButton>
        <StopButton>
          <CloseOutlined />
        </StopButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default TaskProgressBar;

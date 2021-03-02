import React from 'react';
import dayjs from 'dayjs';
import { Caption, ProgressBar, TaskProgressBarWrapper } from './styled';
import { CloseOutlined, PauseOutlined, CaretRightOutlined } from '@ant-design/icons';
import { PausePlayButton, StopButton } from './styled';

type TaskProgressBarType = {
  progress: number;
  elaspedTime: Date;
  inprogressPhoto: number;
  totalPhoto: number;
  active: boolean;
};

const TaskProgressBar: React.FC<TaskProgressBarType> = (props) => {
  const { progress, elaspedTime, inprogressPhoto, totalPhoto, active } = props;
  return (
    <TaskProgressBarWrapper>
      <div style={{ display: 'inline-block' }}>
        <Caption>elasped time {dayjs(elaspedTime).format('HH:mm:ss')} </Caption>
        <ProgressBar percent={progress} />
        <Caption>
          {inprogressPhoto} of {totalPhoto} photos
        </Caption>
      </div>
      <div style={{ display: 'inline-block', height: '100%' }}>
        <PausePlayButton active={active}>
          {active ? <PauseOutlined /> : <CaretRightOutlined />}
        </PausePlayButton>
        <StopButton>
          <CloseOutlined />
        </StopButton>
      </div>
    </TaskProgressBarWrapper>
  );
};

export default TaskProgressBar;

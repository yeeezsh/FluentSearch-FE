import React from 'react';
import dayjs from 'dayjs';
import { Caption, ProgressBar, TaskProgressBarWrapper } from './styled';

type TaskProgressBarType = {
  progress: number;
  elaspedTime: Date;
  inprogressPhoto: number;
  totalPhoto: number;
};

const TaskProgressBar: React.FC<TaskProgressBarType> = (props) => {
  const { progress, elaspedTime, inprogressPhoto, totalPhoto } = props;
  return (
    <TaskProgressBarWrapper>
      <Caption>elasped time {dayjs(elaspedTime).format('HH:mm:ss')} </Caption>
      <ProgressBar percent={progress} />
      <Caption>
        {inprogressPhoto} of {totalPhoto} photos
      </Caption>
    </TaskProgressBarWrapper>
  );
};

export default TaskProgressBar;

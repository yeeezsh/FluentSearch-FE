import React from 'react';

import { Caption, ProgressBar, Wrapper, ProgressBarWrapper } from './styled';
import { TaskStatus } from '../../../../common/generated/generated-types';

type TaskProgressBarType = {
  record: TaskStatus;
};

const TaskProgressBar: React.FC<TaskProgressBarType> = (props) => {
  const { record } = props;
  const { wait, excute, finish } = record;

  const totalPhoto = wait + excute + finish;
  const inprogressPhoto = excute;
  const progress = parseFloat(((inprogressPhoto / totalPhoto) * 100).toFixed(2));

  return (
    <Wrapper>
      <ProgressBarWrapper>
        <ProgressBar percent={progress} />
        <Caption>
          {inprogressPhoto} of {totalPhoto} photos
        </Caption>
      </ProgressBarWrapper>
      {/* TODO: If want to use cancel task please uncomment this
      <ButtonWrapper>
        <StopButton>
          <CloseOutlined />
        </StopButton>
      </ButtonWrapper> */}
    </Wrapper>
  );
};

export default TaskProgressBar;

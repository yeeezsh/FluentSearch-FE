import React from 'react';
import {
  Caption,
  ProgressBar,
  Wrapper,
  ButtonWrapper,
  ProgressBarWrapper,
} from './styled';
import { CloseOutlined } from '@ant-design/icons';
import { StopButton } from './styled';
import { TaskStatusEnum } from '../../reducer/taskReducer/types';

{
  /*TODO: optional for mvp final and dont forget to re import missing import */
}
type TaskProgressBarType = {
  taskID?: string;
  progress: number;
  elaspedTime?: string;
  inprogressPhoto: number;
  totalPhoto: number;
};

const TaskProgressBar: React.FC<TaskProgressBarType> = (props) => {
  const { progress, inprogressPhoto, totalPhoto } = props;
  return (
    <Wrapper>
      <ProgressBarWrapper>
        {/* TODO: Temp hide for mvp final 
        <Caption>elasped time {dayjs(elaspedTime).format('HH:mm:ss')} </Caption> */}
        <ProgressBar percent={progress} />
        <Caption>
          {inprogressPhoto} of {totalPhoto} photos
        </Caption>
      </ProgressBarWrapper>
      {/* TODO: temp add for mvp final */}
      <ButtonWrapper style={{ marginLeft: '1rem' }}>
        {
          //TODO: temp hide for mvp final
          /*
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
        </PausePlayButton>*/
        }
        <StopButton>
          <CloseOutlined />
        </StopButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default TaskProgressBar;

import React from 'react';
import { Table, Tag } from 'antd';
import dayjs from 'dayjs';
import TaskProgressBar from '../TaskProgressBar';
import {
  InprogressPhoto,
  TotalPhoto,
  ElaspedTime,
  Active,
} from 'Modules/task/mocks/data';
import { stringCutter } from 'Modules/history/utils/stringCutter';
import { TaskTableWrapper } from './styled';
import { TaskTablePropsType } from './type';

const TaskTable: React.FC<TaskTablePropsType> = (props) => {
  const { data } = props;
  const { Column } = Table;

  const YEAR_MONTH_DATE_FORMAT = 'YYYY-MM-DD';
  const HOUR_MINUTE_SECOND_FORMAT = 'HH:mm:ss';

  return (
    <TaskTableWrapper dataSource={data}>
      <Column
        title="Timestamp"
        dataIndex="timestamp"
        key="timestamp"
        render={(timestamp: Date): JSX.Element => {
          return (
            <div>
              {dayjs(timestamp).format(YEAR_MONTH_DATE_FORMAT)}
              <br />
              {dayjs(timestamp).format(HOUR_MINUTE_SECOND_FORMAT)}
            </div>
          );
        }}
      />
      <Column
        title="TaskID"
        dataIndex="taskID"
        key="taskID"
        render={(taskID: string): string => {
          return stringCutter(taskID);
        }}
      />
      <Column title="Task Name" dataIndex="taskName" key="taskName" />
      <Column title="Model" dataIndex="model" key="model" />
      <Column
        title="Status"
        dataIndex="status"
        key="status"
        render={function showStatus(status: string): JSX.Element {
          const color =
            status == 'error'
              ? 'red'
              : status == 'finish'
              ? 'green'
              : status == 'resume'
              ? 'orange'
              : 'purple';
          return (
            <Tag color={color} key={status}>
              {status.toUpperCase()}
            </Tag>
          );
        }}
      />
      <Column
        title="Progress"
        dataIndex="progress"
        key="progress"
        render={(progress: number, taskID: string) => {
          return (
            <TaskProgressBar
              taskID={taskID}
              inprogressPhoto={InprogressPhoto.inprogressPhoto}
              totalPhoto={TotalPhoto.totalPhoto}
              elaspedTime={ElaspedTime.elaspedTime}
              progress={progress}
              active={Active.active}
            />
          );
        }}
      />
    </TaskTableWrapper>
  );
};

export default TaskTable;

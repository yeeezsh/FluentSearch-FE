import React from 'react';
import { Table, Tag } from 'antd';
import dayjs from 'dayjs';
import TaskProgressBar from '../TaskProgressBar';
import { stringCutter } from 'Modules/history/utils/stringCutter';
import { TaskTableWrapper } from './styled';
import { TaskTablePropsType } from './type';
import { Progress, TaskStatusEnum } from '../../reducer/taskReducer/types';

const TaskTable: React.FC<TaskTablePropsType> = (props) => {
  const { data } = props;
  const { Column } = Table;

  const YEAR_MONTH_DATE_FORMAT = 'YYYY-MM-DD';
  const HOUR_MINUTE_SECOND_FORMAT = 'HH:mm:ss';

  console.log(data);

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
        render={(status: TaskStatusEnum) => {
          const color =
            status == 'CANCEL'
              ? 'red'
              : status == 'FINISH'
              ? 'green'
              : status == 'WAITING'
              ? 'orange'
              : 'purple';
          return (
            <Tag color={color} key={status}>
              {status}
            </Tag>
          );
        }}
      />
      <Column
        title="Progress"
        dataIndex="progress"
        key="progress"
        render={(progress: Progress, taskID: string) => {
          return (
            <TaskProgressBar
              taskID={taskID}
              inprogressPhoto={progress.inprogressPhoto}
              totalPhoto={progress.totalPhoto}
              progress={progress.progress}
            />
          );
        }}
      />
    </TaskTableWrapper>
  );
};

export default TaskTable;

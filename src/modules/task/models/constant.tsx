import dayjs from 'dayjs';
import React from 'react';
import { stringCutter } from 'Modules/task/utils/stringCutter';
import TaskProgressBar from 'Modules/task/components/TaskProgressBar';
import { ElaspedTime, InprogressPhoto, TotalPhoto } from '../mocks/data';

export const columns = [
  {
    title: 'Timestamp',
    dataIndex: 'timestamp',
    key: 'timestamp',
    render: function showTimeStamp(timestamp: Date): JSX.Element {
      return (
        <div>
          {dayjs(timestamp).format('YYYY-MM-DD')}
          <br />
          {dayjs(timestamp).format('HH:mm:ss')}
        </div>
      );
    },
  },
  {
    title: 'TaskID',
    dataIndex: 'taskID',
    key: 'taskID',
    render: function showTaskID(taskID: string): string {
      return stringCutter(taskID);
    },
  },
  {
    title: 'Task Name',
    dataIndex: 'taskName',
    key: 'taskName',
  },
  {
    title: 'Model',
    dataIndex: 'model',
    key: 'model',
  },
  {
    title: 'Progress',
    dataIndex: 'progress',
    key: 'progress',
    render: function showProgress(progress: number): JSX.Element {
      return (
        <TaskProgressBar
          inprogressPhoto={InprogressPhoto.inprogressPhoto}
          totalPhoto={TotalPhoto.totalPhoto}
          elaspedTime={new Date(ElaspedTime.elaspedTime)}
          progress={progress}
        />
      );
    },
  },
];

import { Tag } from 'antd';
import moment from 'moment';
import React from 'react';

import { stringCutter } from 'Modules/history/utils/stringCutter';

export const columns = [
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
    title: 'Start Time',
    dataIndex: 'startTime',
    key: 'startTime',
    render: function showFinishTime(finishTime: Date): JSX.Element {
      return (
        <div>
          {moment(finishTime).format('YYYY-MM-DD')}
          <br />
          {moment(finishTime).format('HH:mm:ss')}
        </div>
      );
    },
  },
  {
    title: 'Finish Time',
    dataIndex: 'finishTime',
    key: 'finishTime',
    render: function showFinishTime(finishTime: Date): JSX.Element {
      return (
        <div>
          {moment(finishTime).format('YYYY-MM-DD')}
          <br />
          {moment(finishTime).format('HH:mm:ss')}
        </div>
      );
    },
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: function showStatus(status: string): JSX.Element {
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
    },
  },
];

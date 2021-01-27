import { Tag } from 'antd';
import { stringCutter } from '../util/stringCutter';
import { StatusEnum } from './status.enum';

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
  },
  {
    title: 'Finish Time',
    dataIndex: 'finishTime',
    key: 'finishTime',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: function showStatus(status: string): JSX.Element {
      return (
        <Tag color={'geekblue'} key={status}>
          {status.toUpperCase()}
        </Tag>
      );
    },
  },
];

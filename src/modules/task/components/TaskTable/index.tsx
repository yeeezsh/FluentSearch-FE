import React from 'react';
import { Table, Tag } from 'antd';
import dayjs from 'dayjs';
import TaskProgressBar from '../TaskProgressBar';
import { TaskTableWrapper } from './styled';
import { TaskTablePropsType } from './type';
import { ModelEnum } from '../../../../common/services/model/generated-types';
import { modelColor } from '../../utils/modelColor';
import { TaskStatus } from '../../../../common/generated/generated-types';
import { checkStatus } from '../../utils/checkStatus';

const TaskTable: React.FC<TaskTablePropsType> = (props) => {
  const { data } = props;
  const { Column } = Table;

  const YEAR_MONTH_DATE_FORMAT = 'YYYY-MM-DD';
  const HOUR_MINUTE_SECOND_FORMAT = 'HH:mm:ss';

  return (
    <TaskTableWrapper dataSource={data}>
      <Column
        title="Create At"
        dataIndex="createAt"
        key="createAt"
        render={(createAt: string): JSX.Element => {
          return (
            <div>
              {dayjs(parseInt(createAt)).format(YEAR_MONTH_DATE_FORMAT)}
              <br />
              {dayjs(parseInt(createAt)).format(HOUR_MINUTE_SECOND_FORMAT)}
            </div>
          );
        }}
      />
      <Column title="Task Name" dataIndex="name" key="name" />
      <Column
        title="Model"
        dataIndex="models"
        key="models"
        render={(models: ModelEnum[]) => {
          return models.map((el, index) => {
            if (index % 2 === 0) {
              return (
                <>
                  <br />
                  <Tag color={modelColor(el)} key={index}>
                    {el}
                  </Tag>
                </>
              );
            }
            return (
              <Tag color={modelColor(el)} key={index}>
                {el}
              </Tag>
            );
          });
        }}
      />
      <Column
        title="status"
        key="status"
        dataIndex="finish"
        render={(_finish: number, record: TaskStatus) => {
          const { color, status } = checkStatus(
            record.wait,
            record.excute,
            record.finish,
          );
          return <Tag color={color}>{status}</Tag>;
        }}
      />
      <Column
        title="Progress"
        key="progress"
        dataIndex="wait"
        render={(_wait: number, record: TaskStatus) => {
          return <TaskProgressBar record={record} />;
        }}
      />
    </TaskTableWrapper>
  );
};

export default TaskTable;

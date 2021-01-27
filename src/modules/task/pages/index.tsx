import React from 'react';
import { DataSource } from 'Modules/task/mocks/data';
import { columns } from 'Modules/task/models/constant';
import { PurpleTable, PageWrapper } from 'Styles/global';
const TaskPage: React.FC = () => {
  return (
    <PageWrapper>
      <h3>Task</h3>
      <hr />
      <PurpleTable
        dataSource={DataSource}
        columns={columns}
        style={{ marginTop: '30px' }}
        pagination={{ position: ['bottomCenter'] }}
      />
    </PageWrapper>
  );
};

export default TaskPage;

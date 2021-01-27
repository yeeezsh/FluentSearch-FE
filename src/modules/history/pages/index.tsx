import React from 'react';
import { DataSource } from 'Modules/history/mocks/data';
import { columns } from 'Modules/history/models/constant';
import { Table } from 'antd';
import { PageWrapper } from './styled';
const HistoryPages: React.FC = () => {
  return (
    <PageWrapper>
      <h3>History</h3>
      <hr />
      <Table
        dataSource={DataSource}
        columns={columns}
        style={{ marginTop: '30px' }}
        pagination={{ position: ['bottomCenter'] }}
      />
    </PageWrapper>
  );
};

export default HistoryPages;

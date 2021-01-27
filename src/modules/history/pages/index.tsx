import React from 'react';
import { dataSource } from 'Modules/history/mocks/data';
import { columns } from 'Modules/history/models/constant';
import { Table } from 'antd';
import { PageWrapper } from './styled';
const HistoryPages: React.FC = () => {
  return (
    <PageWrapper>
      <Table dataSource={dataSource} columns={columns} />
    </PageWrapper>
  );
};

export default HistoryPages;

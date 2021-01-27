import React from 'react';
import { dataSource } from 'Modules/history/mocks/data';
import { columns } from 'Modules/history/models/constant';
import { Table } from 'antd';
const HistoryPages: React.FC = () => {
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default HistoryPages;

import { Table } from 'antd';
import styled from 'styled-components';

export const TaskTableWrapper = styled(Table)`
  .ant-table-thead > tr > th {
    background: #e1d8ff;
    color: var(--secondary-color);
  }
  .ant-pagination-item-active {
    border: 1px solid var(--secondary-color);
  }
  .ant-pagination-item-active a {
    color: var(--secondary-color);
  }

  .ant-table-cell {
    text-align: center;
  }
`;

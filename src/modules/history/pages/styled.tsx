import styled from 'styled-components';

export const PageWrapper = styled.div`
  margin: 10% 10% 0% 10%;
  padding-bottom: 5%;
  .ant-table-thead > tr > th {
    background: #e1d8ff;
    color: #5a36cc;
  }
  .ant-pagination-item-active {
    border: 1px solid #5a36cc;
  }

  .ant-pagination-item-active a {
    color: #5a36cc;
  }
`;

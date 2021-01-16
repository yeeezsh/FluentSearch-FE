import styled from 'styled-components';
import { Card } from 'antd';

export const DashboardWrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 20%;
  background-color: #5a36cc;
`;

export const ContentWrapper = styled.div`
  padding: 5% 10% 10% 10%;
`;

export const DashboardCard = styled(Card)`
  border-radius: 8px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

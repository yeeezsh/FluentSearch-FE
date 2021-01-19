import styled from 'styled-components';
import { Card, Tag } from 'antd';

export const DashboardCard = styled(Card)`
  border-radius: 8px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  height: auto;
  min-height: 250px;
  width: auto;
  min-width: 230px;
`;

export const SmallBodyText = styled.p`
  font-size: 0.8rem;
  margin-bottom: 2px;
  margin-top: 10px;
  color: #88888d;
`;

export const Label = styled(Tag)`
  border-radius: 100px;
`;

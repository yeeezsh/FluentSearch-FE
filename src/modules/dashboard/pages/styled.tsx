import styled from 'styled-components';
import { Card } from 'antd';

export const DashboardWrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 35%;
  position: fixed;
  background-color: #5a36cc;
  z-index: -1;

  h1 {
    font-size: 3.05rem;
    font-weight: bold;
  }

  h2 {
    font-size: 2.44rem;
    font-weight: bold;
  }

  h3 {
    font-size: 1.95rem;
    font-weight: bold;
  }

  h4 {
    font-size: 1.56rem;
    font-weight: bold;
  }

  h5 {
    font-size: 1.25rem;
    font-weight: bold;
  }

  body,
  p {
    font-size: 1rem;
  }
`;

export const SmallBodyText = styled.p`
  font-size: 0.8rem;
  margin-bottom: 2px;
  margin-top: 10px;
  color: #88888d;
`;

export const CaptionText = styled.p`
  font-size: 0.64rem;
`;

export const ContentWrapper = styled.div`
  padding: 8% 10% 10% 10%;
`;

export const DashboardCard = styled(Card)`
  border-radius: 8px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  height: auto;
  min-height: 250px;
  padding-left: 2%;
`;

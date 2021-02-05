import { Progress } from 'antd';
import styled from 'styled-components';

export const ProgressBar = styled(Progress)`
  .ant-progress-inner {
    background-color: #e1d8ff;
  }

  .ant-progress-success-bg,
  .ant-progress-bg {
    background-color: #5a36cc;
  }
`;

export const Caption = styled.p`
  font-size: 0.8rem;
  margin: 0;
`;

export const TaskProgressBarWrapper = styled.div`
  text-align: center;
`;

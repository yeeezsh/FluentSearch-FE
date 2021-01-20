import { Progress } from 'antd';
import React from 'react';
import { DashboardCard, SmallBodyText } from './styled';
import { _progressCardProps } from './types';

const ProgressCard: React.FC<_progressCardProps> = (props) => {
  const { cardName, progress, doneNumber, totalNumber } = props;
  return (
    <DashboardCard>
      <h5>{cardName}</h5>
      <div style={{ textAlign: 'center' }}>
        <Progress
          type="circle"
          percent={progress}
          strokeWidth={8}
          strokeColor={{ '0%': '#5a36cc', '100%': '#5a36cc' }}
        />
        <SmallBodyText style={{ marginTop: '10%' }}>
          {doneNumber} of {totalNumber} photos
        </SmallBodyText>
      </div>
    </DashboardCard>
  );
};

export default ProgressCard;

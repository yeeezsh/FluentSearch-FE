import { Progress } from 'antd';
import React from 'react';
import {
  DashboardCard,
  SmallBodyText,
  ProgressCardWrapper,
} from 'Modules/dashboard/components/DashboardCard/styled';
import { ProgressCardProps } from './types';
import kFormatter from 'Utils/kFormatter';

const ProgressCard: React.FC<ProgressCardProps> = (props) => {
  const { cardName, progress, doneNumber, totalNumber } = props;
  return (
    <DashboardCard>
      <h5>{cardName}</h5>
      <ProgressCardWrapper>
        <Progress
          type="circle"
          percent={progress}
          strokeWidth={8}
          strokeColor={{ '0%': '#5a36cc', '100%': '#5a36cc' }}
        />
        <SmallBodyText style={{ marginTop: '10%' }}>
          {kFormatter(doneNumber)} of {kFormatter(totalNumber)} photos
        </SmallBodyText>
      </ProgressCardWrapper>
    </DashboardCard>
  );
};

export default ProgressCard;

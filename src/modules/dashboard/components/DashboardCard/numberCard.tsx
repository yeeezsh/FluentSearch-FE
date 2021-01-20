import React from 'react';
import kFormatter from 'Utils/kFormatter';
import { DashboardCard, SmallBodyText } from './styled';
import { numberCardProps } from './types';

const NumberCard: React.FC<numberCardProps> = (props) => {
  const { cardName, largeNumber, todayNumber } = props;
  return (
    <DashboardCard>
      <h5>{cardName}</h5>
      <br />
      <h3>{kFormatter(largeNumber)}</h3>
      <SmallBodyText>today upload</SmallBodyText>
      <p style={{ fontWeight: 'bold', color: '#5A36CC' }}>+{kFormatter(todayNumber)}</p>
    </DashboardCard>
  );
};

export default NumberCard;

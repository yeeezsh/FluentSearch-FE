import React from 'react';
import kFormatter from 'Utils/kFormatter';
import { DashboardCard, SmallBodyText, TodayNumberText } from '../styled';
import { NumberCardProps } from './types';

const NumberCard: React.FC<NumberCardProps> = (props) => {
  const { cardName, largeNumber, todayNumber } = props;
  return (
    <DashboardCard>
      <h5>{cardName}</h5>
      <br />
      <h3>{kFormatter(largeNumber)}</h3>
      <SmallBodyText>today upload</SmallBodyText>
      <TodayNumberText>+{kFormatter(todayNumber)}</TodayNumberText>
    </DashboardCard>
  );
};

export default NumberCard;

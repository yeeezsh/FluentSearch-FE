import React from 'react';
import { DashboardCard, Label } from './styled';
import { modelCardProps } from './types';
import kFormatter from 'Utils/kFormatter';

const ModelCard: React.FC<modelCardProps> = (props) => {
  const { cardName, model, largeNumber } = props;
  return (
    <DashboardCard>
      <h5>{cardName}</h5>
      <br />
      <Label color="purple" style={{ marginTop: '10%' }}>
        {model}
      </Label>
      <h3 style={{ marginTop: '0%', marginBottom: '-3%' }}>{kFormatter(largeNumber)}</h3>
      <p>photos</p>
    </DashboardCard>
  );
};

export default ModelCard;

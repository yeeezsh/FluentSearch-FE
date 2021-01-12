import React from 'react';
import { CheckCircleOutlined, CheckCircleFilled } from '@ant-design/icons';
import { SelectIconStyled } from './styled';

const SelectIcon: React.FC = () => {
  return (
    <SelectIconStyled>
      <CheckCircleOutlined style={{ fontSize: 36 }} />
    </SelectIconStyled>
  );
};

export default SelectIcon;

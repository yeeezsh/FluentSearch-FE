import React, { CSSProperties, useEffect, useState } from 'react';
import { CheckCircleOutlined, CheckCircleFilled } from '@ant-design/icons';
import { SelectIconWrapperStyled } from './styled';
import { Props } from './types';

const iconStyle: CSSProperties = { fontSize: 36 };

const SelectedIcon: React.FC = () => (
  <CheckCircleFilled style={{ ...iconStyle, color: '#0BB5C2' }} />
);

const SelectIcon: React.FC<Props> = (props) => {
  const { hover, selected } = props;
  const [innerHover, setInnerHover] = useState<boolean>(false);
  const onInnerHover = (isHover: boolean) => {
    setInnerHover(isHover);
  };
  return (
    <SelectIconWrapperStyled
      onMouseOver={() => onInnerHover(true)}
      onMouseLeave={() => onInnerHover(false)}>
      {hover && !selected && !innerHover && <CheckCircleOutlined style={iconStyle} />}
      {innerHover && !selected && <CheckCircleFilled style={iconStyle} />}
      {selected && <SelectedIcon />}
    </SelectIconWrapperStyled>
  );
};

export default SelectIcon;

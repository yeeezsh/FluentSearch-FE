import { CheckCircleFilled, CheckCircleOutlined } from '@ant-design/icons';
import React, { CSSProperties, useState } from 'react';
import { SelectIconWrapperStyled } from './styled';
import { Props } from './types';

const iconStyle: CSSProperties = { fontSize: 24 };

export const SelectedIcon: React.FC = () => (
  <CheckCircleFilled style={{ ...iconStyle, color: '#0BB5C2' }} />
);
export const InnerHoverIcon: React.FC = () => <CheckCircleFilled style={iconStyle} />;
export const HoverIcon: React.FC = () => <CheckCircleOutlined style={iconStyle} />;

const SelectIcon: React.FC<Props> = (props) => {
  const { hover, selected } = props;
  const [innerHover, setInnerHover] = useState<boolean>(false);
  const onInnerHover = (isHover: boolean) => {
    setInnerHover(isHover);
  };

  const onClick = () => {
    props.onSelect(!selected);
  };
  return (
    <SelectIconWrapperStyled
      onMouseOver={() => onInnerHover(true)}
      onMouseLeave={() => onInnerHover(false)}
      onClick={onClick}>
      {hover && !selected && !innerHover && <HoverIcon />}
      {innerHover && !selected && <InnerHoverIcon />}
      {selected && <SelectedIcon />}
    </SelectIconWrapperStyled>
  );
};

export default SelectIcon;

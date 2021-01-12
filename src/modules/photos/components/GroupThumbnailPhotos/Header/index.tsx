import React, { useState } from 'react';
import { Props } from './types';
import dayjs from 'dayjs';
import SelectBadgeIcon from '../../SelectBadgeIcon';
import { DateHeaderStyled, HeaderWrapperStyled } from './styled';
const DATE_FORMAT = 'ddd, MMM YYYY';
const Header: React.FC<Props> = (props) => {
  const day = dayjs(props.date).startOf('day');
  const today = dayjs().startOf('day');
  const isToday = day.valueOf() === today.valueOf();

  const onSelect = (s: boolean) => {
    return;
  };

  const [hover, setHover] = useState<boolean>(false);

  const onHover = (isHover: boolean) => {
    setHover(isHover);
  };
  return (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <HeaderWrapperStyled
      onMouseLeave={() => onHover(false)}
      onMouseOver={() => onHover(true)}>
      <SelectBadgeIcon onSelect={onSelect} hover={hover} selected={false} />
      <DateHeaderStyled>{isToday ? 'Today' : day.format(DATE_FORMAT)}</DateHeaderStyled>
    </HeaderWrapperStyled>
  );
};

export default Header;

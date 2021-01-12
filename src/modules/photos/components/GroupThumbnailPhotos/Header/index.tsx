import React, { useState } from 'react';
import { Props } from './types';
import dayjs from 'dayjs';
import SelectIcon from '../../ThumbnailPhoto/SelectIcon';
import { DateHeaderStyled, HeaderWrapperStyled } from './styled';

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
      <SelectIcon onSelect={onSelect} hover={hover} selected={false} />
      <DateHeaderStyled>
        {isToday ? 'Today' : day.format('ddd, MMM YYYY')}
      </DateHeaderStyled>
    </HeaderWrapperStyled>
  );
};

export default Header;

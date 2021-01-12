import dayjs from 'dayjs';
import { mount } from 'enzyme';
import React from 'react';
import Header from '.';
import { DateHeaderStyled } from './styled';

describe('GroupThumbnailPhotos / Header Components', () => {
  const today = dayjs();

  it("Should show 'Today' when date is same date on props", () => {
    const wrap = mount(<Header date={today.toDate()} />);
    const result = wrap.find(DateHeaderStyled).text();
    expect(result).toEqual('Today');
  });

  it('Should show Locale date string when date is different date on props', () => {
    const date = today.add(1, 'day');
    const expected = date.format('ddd, MMM YYYY');
    const wrap = mount(<Header date={date.toDate()} />);
    const result = wrap.find(DateHeaderStyled).text();
    expect(result).toEqual(expected);
  });
});

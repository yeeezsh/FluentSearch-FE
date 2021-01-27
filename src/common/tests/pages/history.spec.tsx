import { shallow } from 'enzyme';
import React from 'react';
import HistoryPage from 'Modules/history/pages';
import { PurpleTable } from 'Styles/global';

describe('Pages/History test', () => {
  it('HistoryPage should be exisiting', () => {
    const wrap = shallow(<HistoryPage />);
    expect(wrap.exists()).toBe(true);
  });

  it('Should contain PurpleTable', () => {
    const wrap = shallow(<HistoryPage />);
    expect(wrap.exists(PurpleTable)).toBe(true);
  });
});

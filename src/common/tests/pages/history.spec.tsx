import { shallow, mount } from 'enzyme';
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

  it('Should contain Timestamp, TaskID, TaskName, Model, Start Time, Finish Time and Status Columns', () => {
    const wrap = mount(<HistoryPage />);
    expect(wrap.find('th').at(0).text()).toEqual('TaskID');
    expect(wrap.find('th').at(1).text()).toEqual('Task Name');
    expect(wrap.find('th').at(2).text()).toEqual('Model');
    expect(wrap.find('th').at(3).text()).toEqual('Start Time');
    expect(wrap.find('th').at(4).text()).toEqual('Finish Time');
    expect(wrap.find('th').at(5).text()).toEqual('Status');
  });
});

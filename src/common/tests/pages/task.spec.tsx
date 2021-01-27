import { mount, shallow } from 'enzyme';
import React from 'react';
import TaskPage from 'Modules/task/pages';
import { PurpleTable } from 'Styles/global';

describe('Pages/Task test', () => {
  it('TaskPage should be exisiting', () => {
    const wrap = shallow(<TaskPage />);
    expect(wrap.exists()).toBe(true);
  });

  it('Should contain PurpleTable', () => {
    const wrap = shallow(<TaskPage />);
    expect(wrap.exists(PurpleTable)).toBe(true);
  });

  it('Should contain Timestamp, TaskID, TaskName, Model, Progress Columns', () => {
    const wrap = mount(<TaskPage />);
    expect(wrap.find('th').at(0).text()).toEqual('Timestamp');
    expect(wrap.find('th').at(1).text()).toEqual('TaskID');
    expect(wrap.find('th').at(2).text()).toEqual('Task Name');
    expect(wrap.find('th').at(3).text()).toEqual('Model');
    expect(wrap.find('th').at(4).text()).toEqual('Progress');
  });
});

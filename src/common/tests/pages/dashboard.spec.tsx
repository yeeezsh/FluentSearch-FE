import { mount, shallow } from 'enzyme';
import React from 'react';
import DashboardPage from 'Modules/dashboard/pages';
import AlbumPreview from 'Modules/dashboard/components/AlbumPreview/index';
import NumberCard from 'Modules/dashboard/components/DashboardCard/NumberCard/index';
import ProgressCard from 'Modules/dashboard/components/DashboardCard/ProgressCard/index';
import ModelCard from 'Modules/dashboard/components/DashboardCard/ModelCard/index';

describe('Pages/Dashboard test', () => {
  it('Render correctly', () => {
    const wrap = shallow(<DashboardPage />);
    expect(wrap.html()).toMatchSnapshot();
  });

  it('Dashboard should be exisiting', () => {
    const wrap = shallow(<DashboardPage />);
    expect(wrap.exists()).toBe(true);
  });

  it('Should 4 Overview Album', () => {
    const wrap = mount(<DashboardPage />);
    expect(wrap.find(AlbumPreview)).toHaveLength(4);
  });

  it('Should contain 2 NumberCard, 1 Progress Card and 1 Model Card', () => {
    const wrap = mount(<DashboardPage />);
    expect(wrap.find(NumberCard)).toHaveLength(2);
    expect(wrap.find(ProgressCard)).toHaveLength(1);
    expect(wrap.find(ModelCard)).toHaveLength(1);
  });
});

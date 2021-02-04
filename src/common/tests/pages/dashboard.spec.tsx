import { mount } from 'enzyme';
import React from 'react';
import DashboardPage from 'Modules/dashboard/pages';
import NumberCard from 'Modules/dashboard/components/DashboardCard/NumberCard/index';
import ProgressCard from 'Modules/dashboard/components/DashboardCard/ProgressCard/index';
import dashboardReducer from 'Modules/dashboard/reducer/dashboardReducer';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

describe('Pages/Dashboard test', () => {
  it('Dashboard should be exisiting', () => {
    const wrap = mount(
      <Provider store={store}>
        <DashboardPage />
      </Provider>,
    );
    expect(wrap.exists()).toBe(true);
  });

  it('Should have Overview Album', () => {
    const wrap = mount(
      <Provider store={store}>
        <DashboardPage />
      </Provider>,
    );
    expect(wrap.exists('OverviewAlbum')).toBe(true);
  });

  it('Should contain 2 NumberCard, 1 Progress Card and 1 Model Card', () => {
    const wrap = mount(
      <Provider store={store}>
        <DashboardPage />
      </Provider>,
    );
    expect(wrap.find(NumberCard)).toHaveLength(2);
    expect(wrap.find(ProgressCard)).toHaveLength(1);
    expect(wrap.find('ModelCard')).toHaveLength(1);
  });
});

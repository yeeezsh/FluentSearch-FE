import { mount } from 'enzyme';
import React from 'react';
import HistoryPage from 'Modules/history/pages';
import { PurpleTable } from 'Styles/global';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import historyReducer from 'Modules/history/reducer/historyReducer';

const rootReducer = combineReducers({
  history: historyReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

describe('Pages/History test', () => {
  let wrap;
  beforeEach(() => {
    wrap = mount(
      <Provider store={store}>
        <HistoryPage />
      </Provider>,
    );
  });
  it('HistoryPage should be exisiting', () => {
    expect(wrap.exists(HistoryPage)).toBe(true);
  });

  it('Should contain PurpleTable', () => {
    expect(wrap.exists(PurpleTable)).toBe(true);
  });

  it('Should contain Timestamp, TaskID, TaskName, Model, Start Time, Finish Time and Status Columns', () => {
    expect(wrap.find('th').at(0).text()).toEqual('TaskID');
    expect(wrap.find('th').at(1).text()).toEqual('Task Name');
    expect(wrap.find('th').at(2).text()).toEqual('Model');
    expect(wrap.find('th').at(3).text()).toEqual('Start Time');
    expect(wrap.find('th').at(4).text()).toEqual('Finish Time');
    expect(wrap.find('th').at(5).text()).toEqual('Status');
  });
});

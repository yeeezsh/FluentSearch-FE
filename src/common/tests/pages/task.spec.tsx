import { mount } from 'enzyme';
import React from 'react';
import TaskPage from 'Modules/task/pages';
import { PurpleTable } from 'Styles/global';
import taskReducer from 'Modules/task/reducer/taskReducer';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import instantSearchReducer from 'Modules/photos/reducers/instantSearchReducer';

const rootReducer = combineReducers({
  task: taskReducer,
  instantSearch: instantSearchReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

describe('Pages/Task test', () => {
  let wrap;
  beforeEach(() => {
    wrap = mount(
      <Provider store={store}>
        <TaskPage />
      </Provider>,
    );
  });
  it('TaskPage should be exisiting', () => {
    expect(wrap.exists()).toBe(true);
  });

  it('Should contain PurpleTable', () => {
    expect(wrap.exists(PurpleTable)).toBe(true);
  });

  it('Should contain Timestamp, TaskID, TaskName, Model, Progress Columns', () => {
    expect(wrap.find('th').at(0).text()).toEqual('Timestamp');
    expect(wrap.find('th').at(1).text()).toEqual('TaskID');
    expect(wrap.find('th').at(2).text()).toEqual('Task Name');
    expect(wrap.find('th').at(3).text()).toEqual('Model');
    expect(wrap.find('th').at(4).text()).toEqual('Progress');
  });
});

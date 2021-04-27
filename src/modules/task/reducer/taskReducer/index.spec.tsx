import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { DataSource } from 'Modules/task/mocks/data';
import { fetchTask } from 'Modules/task/services/fetch.task';
import { fetchTaskData } from './actions';
import taskReducer, { taskActions } from './index';
import { initTaskState } from './init';

const rootReducer = combineReducers({
  task: taskReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

describe('taskReducer test', () => {
  it('it should correctly define initial state', () => {
    store.dispatch(taskActions.init());
    const result = store.getState().task;
    expect(result).toEqual(initTaskState);
  });

  it('should have pending/fulfill fetchtTaskData', async () => {
    store.dispatch(taskActions.init());
    store.dispatch({ type: fetchTaskData.fulfilled.type, payload: {} });
    expect(store.getState().task.ready).toBe(true);
  });
});

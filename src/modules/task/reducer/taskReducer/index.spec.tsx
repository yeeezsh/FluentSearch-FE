import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { DataSource } from 'Modules/task/mocks/data';
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
    const parsed = DataSource.map((el) => {
      const keys = Object.keys(el);
      return keys.reduce((acc, cur: unknown) => {
        if (cur instanceof Date) {
          return { ...acc, cur: cur.toDateString() };
        }
        return { ...acc, cur };
      }, {});
    });

    store.dispatch({ type: fetchTaskData.fulfilled.type, payload: { data: parsed } });
    expect(store.getState().task.ready).toBe(true);
  });
});

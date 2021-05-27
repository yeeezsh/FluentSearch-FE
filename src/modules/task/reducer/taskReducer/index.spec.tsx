import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { ModelEnum, UserTasksDto } from '../../../../common/generated/generated-types';
import taskReducer, { taskActions } from './index';
import { initTaskState } from './init';

const rootReducer = combineReducers({
  task: taskReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

const mockData: UserTasksDto = {
  tasks: [
    {
      name: 'task1',
      wait: 0,
      excute: 4,
      finish: 0,
      models: [ModelEnum.FacesEmo],
      createAt: '112345642',
    },
  ],
  quota: -1,
};

describe('taskReducer test', () => {
  it('it should correctly define initial state', () => {
    store.dispatch(taskActions.init());
    const result = store.getState().task;
    expect(result).toEqual(initTaskState);
  });

  it('it should setTaskData correctly', () => {
    store.dispatch(taskActions.setTaskData({ data: mockData }));
    const result = store.getState().task.data;
    const resultPresent = store.getState().task.present.tasks;
    expect(result).toEqual(mockData);
    expect(resultPresent).toEqual(mockData.tasks);
  });
});

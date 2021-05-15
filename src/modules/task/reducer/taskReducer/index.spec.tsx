import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { DataSource } from 'Modules/task/mocks/data';
import { ModelEnum } from 'Modules/task/models/model.enum';
import { fetchTaskData } from './actions';
import taskReducer, { taskActions } from './index';
import { initTaskState } from './init';
import { TaskData, TaskPresent, TaskStatusEnum } from './types';

const rootReducer = combineReducers({
  task: taskReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

const mockData: TaskData[] = [
  {
    _id: '1',
    timestamp: '0',
    taskID: '123',
    taskName: 'Create Album',
    model: ModelEnum.RESNET,
    progress: 0,
    elaspedTime: '23.00',
    inprogressPhoto: 1,
    totalPhoto: 1,
  },
];

const newMockData: TaskData[] = [
  {
    _id: '2',
    timestamp: '0',
    taskID: '123',
    taskName: 'Create Album',
    model: ModelEnum.RESNET,
    progress: 0,
    elaspedTime: '23.00',
    inprogressPhoto: 1,
    totalPhoto: 1,
  },
];

const expectedResult: TaskPresent[] = [
  {
    _id: '1',
    timestamp: '0',
    taskID: '123',
    taskName: 'Create Album',
    model: ModelEnum.RESNET,
    progress: 0,
    elaspedTime: '23.00',
    inprogressPhoto: 1,
    totalPhoto: 1,
    status: TaskStatusEnum.WAITING,
  },
];

const newExpectedResult: TaskPresent[] = [
  {
    _id: '1',
    timestamp: '0',
    taskID: '123',
    taskName: 'Create Album',
    model: ModelEnum.RESNET,
    progress: 0,
    elaspedTime: '23.00',
    inprogressPhoto: 1,
    totalPhoto: 1,
    status: TaskStatusEnum.WAITING,
  },
  {
    _id: '2',
    timestamp: '0',
    taskID: '123',
    taskName: 'Create Album',
    model: ModelEnum.RESNET,
    progress: 0,
    elaspedTime: '23.00',
    inprogressPhoto: 1,
    totalPhoto: 1,
    status: TaskStatusEnum.WAITING,
  },
];

describe('taskReducer test', () => {
  it('it should correctly define initial state', () => {
    store.dispatch(taskActions.init());
    const result = store.getState().task;
    expect(result).toEqual(initTaskState);
  });

  it('should have pending/fulfill fetchTaskData', async () => {
    store.dispatch({ type: fetchTaskData.fulfilled.type, payload: { data: mockData } });
    const result = store.getState().task.present;
    expect(store.getState().task.ready).toBe(true);
    expect(result).toEqual(expectedResult);

    store.dispatch({
      type: fetchTaskData.fulfilled.type,
      payload: { data: newMockData },
    });
    const addNewDataResult = store.getState().task.present;
    expect(addNewDataResult).toEqual(newExpectedResult);
  });

  it('should setProgress correctly', () => {
    store.dispatch({ type: fetchTaskData.fulfilled.type, payload: { data: mockData } });
    store.dispatch(taskActions.setProgress({ _id: '1', progress: 99 }));
    const progressResult = store.getState().task.present['1'].progress;
    expect(progressResult).toEqual(99);
  });

  it('should setStatus correctly', () => {
    store.dispatch({ type: fetchTaskData.fulfilled.type, payload: { data: mockData } });
    store.dispatch(taskActions.setStatus({ _id: '1', status: TaskStatusEnum.FINISH }));
    const progressStatus = store.getState().task.present['1'].status;
    expect(progressStatus).toEqual(TaskStatusEnum.FINISH);
  });
});

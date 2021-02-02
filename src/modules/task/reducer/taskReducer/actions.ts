import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTask } from 'Modules/task/services/fetch.task';
import { TASK } from './types';

export const fetchTaskData = createAsyncThunk(TASK, async () => {
  return { data: (await fetchTask()).map((el) => ({ ...el, key: el.key })) };
});

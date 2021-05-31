import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserTasksDto } from '../../../../common/generated/generated-types';
import { initTaskState } from './init';
import { TASK } from './types';

export const taskSlice = createSlice({
  name: TASK,
  initialState: initTaskState,
  reducers: {
    init(state) {
      return { ...state, ...initTaskState };
    },
    setTaskData(state, action: PayloadAction<{ data: UserTasksDto }>) {
      const { data } = action.payload;
      state.data = data;
      state.present.tasks = data.tasks;
    },
  },
});

export default taskSlice.reducer;
export const taskActions = taskSlice.actions;

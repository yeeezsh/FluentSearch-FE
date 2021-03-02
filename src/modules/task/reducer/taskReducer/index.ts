import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorStateCodeEnum } from 'Stores/common/types/error';
import { fetchTaskData } from './actions';
import { initTaskState } from './init';
import { TASK } from './types';

export const taskSlice = createSlice({
  name: TASK,
  initialState: initTaskState,
  reducers: {
    init(state) {
      return { ...state, ...initTaskState };
    },
    setActiveStatus(state, action: PayloadAction<{ active: boolean }>) {
      return {
        ...state,
        active: !action.payload.active,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTaskData.rejected, (state) => {
      state.ready = false;
      state.error = { code: ErrorStateCodeEnum.ServerInternalError, msg: 'api error' };
    });
    builder.addCase(fetchTaskData.pending, (state) => {
      state.ready = false;
      state.error = undefined;
    });
    builder.addCase(fetchTaskData.fulfilled, (state, action: any) => {
      state.ready = true;
      state.error = undefined;
      state.data = action.payload.data;
    });
  },
});

export default taskSlice.reducer;
export const taskActions = taskSlice.actions;

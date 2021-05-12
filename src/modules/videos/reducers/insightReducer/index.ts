import { createSlice } from '@reduxjs/toolkit';
import { initInsightState } from './init';
import { INSIGHT } from './type';

const insightSlice = createSlice({
  name: INSIGHT,
  initialState: initInsightState,
  reducers: {
    init(state) {
      return { ...state, ...initInsightState };
    },
  },
});
export default insightSlice.reducer;
export const insightActions = insightSlice.actions;

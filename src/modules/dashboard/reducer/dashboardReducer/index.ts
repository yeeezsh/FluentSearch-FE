import { createSlice } from '@reduxjs/toolkit';
import { initDashboardState } from './init';
import { DASHBOARD } from '../../models/types';
import { fetchDashboardData } from './actions';
import { ErrorStateCodeEnum } from 'Stores/common/types/error';

export const dashboardSlice = createSlice({
  name: DASHBOARD,
  initialState: initDashboardState,
  reducers: {
    init(state) {
      return { ...state, ...initDashboardState };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDashboardData.rejected, (state) => {
      state.ready = false;
      state = {
        ...state,
        error: {
          code: ErrorStateCodeEnum.ServerInternalError,
          msg: 'api error',
        },
      };
    });
    builder.addCase(fetchDashboardData.pending, (state) => {
      state.ready = false;
      state.error = undefined;
    });
    builder.addCase(fetchDashboardData.fulfilled, (state, action) => {
      state.ready = true;
      state.error = undefined;
      state.data.albumPreviewData = action.payload.data.AlbumPreviewMockData;
      state.data.dashboardData = action.payload.data.DashboardMockData;
    });
  },
});

export default dashboardSlice.reducer;
export const dashboardActions = dashboardSlice.actions;

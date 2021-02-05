import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDashboard } from 'Modules/dashboard/services/fetch.dashboardData';
import { DASHBOARD } from '../../models/types';

export const fetchDashboardData = createAsyncThunk(DASHBOARD, async () => {
  return { data: fetchDashboard() };
});

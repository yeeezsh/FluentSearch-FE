import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchHistory } from 'Modules/history/services/fetch.history';
import { HISTORY } from './types';

export const fetchHistoryData = createAsyncThunk(HISTORY, async (key?: string) => {
  return { data: (await fetchHistory()).map((el) => ({ ...el, key: el.key })) };
});

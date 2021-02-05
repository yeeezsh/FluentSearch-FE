import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchHistory } from 'Modules/history/services/fetch.history';
import { HISTORY } from './types';

export const fetchHistoryData = createAsyncThunk(HISTORY, async () => {
  return { data: fetchHistory().map((el) => ({ ...el, key: el.key })) };
});

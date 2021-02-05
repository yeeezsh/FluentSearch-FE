import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InstantSearchReducer, INSTANT_SEARCH } from './types';
const initialState: InstantSearchReducer = {
  autocomplete: [],
  result: [],
  word: '',
  loading: false,
};

//TODO: unit test
export const instantSearchSlice = createSlice({
  name: INSTANT_SEARCH,
  initialState,
  reducers: {
    onSearch(state, action: PayloadAction<{ word: string }>) {
      state.word = action.payload.word;
    },
    onData(
      state,
      action: PayloadAction<{
        autocomplete: InstantSearchReducer['autocomplete'];
        data: InstantSearchReducer['result'];
        loading: boolean;
      }>,
    ) {
      const { loading, data, autocomplete } = action.payload;
      state.loading = loading;
      state.autocomplete = autocomplete;
      state.result = data;
    },
  },
});

export default instantSearchSlice.reducer;

export const instantSearchActions = instantSearchSlice.actions;

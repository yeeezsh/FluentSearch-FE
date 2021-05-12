import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AnnotaionType } from 'Modules/videos/models/types';
import { ErrorStateCodeEnum } from 'Stores/common/types/error';
import { fetchInsightData } from './actions';
import { initInsightState } from './init';
import { INSIGHT } from './type';

const insightSlice = createSlice({
  name: INSIGHT,
  initialState: initInsightState,
  reducers: {
    init(state) {
      return { ...state, ...initInsightState };
    },
    setSelectedPerson(state, action: PayloadAction<{ id: string }>) {
      const { id } = action.payload;
      state.present.selectedPerson = id;
    },
    setSelectedLabel(state, action: PayloadAction<{ id: string }>) {
      const { id } = action.payload;
      state.present.selectedLabel = id;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInsightData.pending, (state) => {
      state.ready = false;
      state.error = undefined;
    });
    builder.addCase(fetchInsightData.rejected, (state) => {
      state.ready = false;
      state.error = {
        code: ErrorStateCodeEnum.ServerInternalError,
        msg: 'api error',
      };
    });
    builder.addCase(
      fetchInsightData.fulfilled,
      (state, action: PayloadAction<{ data: AnnotaionType[] }>) => {
        const { data } = action.payload;
        state.ready = true;
        state.error = undefined;
        state.incidentData = data;

        state.present.label = data.filter((el) => el.label !== 'person');
        state.present.person = data.filter((el) => el.label === 'person');
      },
    );
  },
});
export default insightSlice.reducer;
export const insightActions = insightSlice.actions;

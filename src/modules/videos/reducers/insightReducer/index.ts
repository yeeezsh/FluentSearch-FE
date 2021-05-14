import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AnnotationResultType, LabelPresentType } from 'Modules/videos/models/types';
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
    setSelectedPerson(state, action: PayloadAction<{ person: string }>) {
      const { person } = action.payload;
      state.present.selectedPerson = person;
      state.present.person.forEach((el) => {
        if (el.classes[0]?.cat === person) el.selected = true;
        else el.selected = false;
      });
    },
    setSelectedLabel(state, action: PayloadAction<{ category: string }>) {
      const { category } = action.payload;
      state.present.selectedLabel = category;
      state.present.label.forEach((el) => {
        if (el.cat === category) el.selected = true;
        else el.selected = false;
      });
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
      (state, action: PayloadAction<{ data: AnnotationResultType[] }>) => {
        const { data } = action.payload;
        state.ready = true;
        state.error = undefined;
        state.incidentData = data;

        state.present.label = data.reduce((acc: LabelPresentType[], cur) => {
          {
            const { classes, nFps } = cur;
            if (classes.length > 0) {
              classes.map((el) => {
                const category = el.cat;
                const foundCategory = acc.find((el) => {
                  return el.cat === category;
                });

                if (foundCategory) foundCategory.nFps.push(nFps);
                else {
                  acc.push({
                    cat: category,
                    selected: false,
                    nFps: [nFps],
                  });
                }
              });
            }
          }
          return acc;
        }, []);

        state.present.person = data
          .filter((el) => el.classes[0]?.cat === 'Person')
          .map((el) => ({ ...el, selected: false }));
      },
    );
  },
});
export default insightSlice.reducer;
export const insightActions = insightSlice.actions;

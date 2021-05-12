import { configureStore } from '@reduxjs/toolkit';
import { annotation } from 'Modules/videos/mocks/annotation';
import { combineReducers } from 'redux';
import insightReducer, { insightActions } from '.';
import { fetchInsightData } from './actions';
import { initInsightState } from './init';

const rootReducer = combineReducers({
  insight: insightReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

describe('reducer/insightReducer test', () => {
  beforeEach(() => {
    store.dispatch(insightActions.init());
  });

  it('it should correctly define initial state', () => {
    store.dispatch(insightActions.init());
    const result = store.getState().insight;
    expect(result).toEqual(initInsightState);
  });

  it('it should fetchInsightData correctly ', () => {
    store.dispatch({
      type: fetchInsightData.fulfilled.type,
      payload: { data: annotation },
    });

    const expectedResultLabel = annotation.filter((el) => el.label !== 'person');
    const expectedResultPerson = annotation.filter((el) => el.label === 'person');

    const result = store.getState().insight.incidentData;
    const resultPerson = store.getState().insight.present.person;
    const resultLabel = store.getState().insight.present.label;

    expect(result).toEqual(annotation);
    expect(resultPerson).toEqual(expectedResultPerson);
    expect(resultLabel).toEqual(expectedResultLabel);
  });
});

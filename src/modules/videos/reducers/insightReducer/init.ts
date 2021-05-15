import { initInsightStateType } from './type';

export const initInsightState: initInsightStateType = {
  incidentData: [],
  present: {
    person: [],
    label: [],
    selectedPerson: -1,
    selectedLabel: '',
  },
  ready: false,
};

import { initInsightStateType } from './type';

export const initInsightState: initInsightStateType = {
  incidentData: [],
  present: {
    person: [],
    label: [],
    selectedPerson: '',
    selectedLabel: '',
  },
  ready: false,
};

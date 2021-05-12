import { initInsightStateType } from './type';

export const initInsightState: initInsightStateType = {
  incidentData: [],
  present: {
    person: [],
    label: [],
    selectedPerson: '',
    selectedLevel: '',
  },
  ready: false,
};

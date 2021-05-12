import { initInsightStateType } from './type';

export const initInsightState: initInsightStateType = {
  incidentData: [],
  present: {
    person: [],
    label: [],
    avatarSelected: '',
    labelSelected: '',
  },
  ready: false,
};

import { AnnotaionType } from 'Modules/videos/models/types';
import { ErrorState } from 'Stores/common/types/error';

const INSIGHT = 'INSIGHT';

type initInsightStateType = {
  incidentData: AnnotaionType[];
  present: {
    person: AnnotaionType[];
    label: AnnotaionType[];
  };
  ready: boolean;
  error?: ErrorState;
};

export { INSIGHT };
export type { initInsightStateType };

import {
  AnnotationResultType,
  LabelPresentType,
  PersonPresentType,
} from 'Modules/videos/models/types';
import { ErrorState } from 'Stores/common/types/error';

const INSIGHT = 'INSIGHT';

type initInsightStateType = {
  incidentData: AnnotationResultType[];
  present: {
    person: PersonPresentType[];
    label: LabelPresentType[];
    selectedPerson: string;
    selectedLabel: string;
  };
  ready: boolean;
  error?: ErrorState;
};

export { INSIGHT };
export type { initInsightStateType };

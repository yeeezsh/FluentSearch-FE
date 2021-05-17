import { AnnotationResultType } from 'Modules/videos/models/types';

export type CanvasPropsType = {
  width: number;
  height: number;
  data: AnnotationResultType[];
  played: number;
  videoHeight: number;
  videoWidth: number;
};

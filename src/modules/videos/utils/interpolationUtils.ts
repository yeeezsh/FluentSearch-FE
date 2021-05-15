import { BoundingBoxType } from '../models/types';
import { getLinearInterpolatedValue } from './mathUtils';

type InterpolateDateType = {
  startIncident: BoundingBoxType;
  endIncident: BoundingBoxType;
  currentTime: number;
};

const getInterpolatedData = ({
  startIncident,
  endIncident,
  currentTime,
}: InterpolateDateType): BoundingBoxType => {
  const interpolated: BoundingBoxType = {
    xmax: 0,
    ymax: 0,
    xmin: 0,
    ymin: 0,
  };
  interpolated.xmax = getLinearInterpolatedValue(
    endIncident.time,
    startIncident.time,
    endIncident.xmax,
    startIncident.xmax,
    currentTime,
  );
  interpolated.ymax = getLinearInterpolatedValue(
    endIncident.time,
    startIncident.time,
    endIncident.ymax,
    startIncident.ymax,
    currentTime,
  );
  interpolated.xmin = getLinearInterpolatedValue(
    endIncident.time,
    startIncident.time,
    endIncident.xmin,
    startIncident.xmin,
    currentTime,
  );
  interpolated.ymin = getLinearInterpolatedValue(
    endIncident.time,
    startIncident.time,
    endIncident.ymin,
    startIncident.ymin,
    currentTime,
  );

  return interpolated;
};

export { getInterpolatedData };

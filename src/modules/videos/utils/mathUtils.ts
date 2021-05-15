const getRandomInt = (max = 0): number => Math.floor(Math.random() * Math.floor(max));

const getLinearInterpolatedValue = (
  x0: number,
  x1: number,
  y0: number,
  y1: number,
  x: number,
): number => {
  const slope = (y1 - y0) / (x1 - x0);
  return slope * (x - x0) + y0;
};

const getFixedNumber = (number: number, digits: number): number =>
  Math.round(number * 10 ** digits) / 10 ** digits;

export { getRandomInt, getLinearInterpolatedValue, getFixedNumber };

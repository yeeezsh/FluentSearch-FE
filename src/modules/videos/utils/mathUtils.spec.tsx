import { getFixedNumber, getLinearInterpolatedValue, getRandomInt } from './mathUtils';

describe('utils/mathUtils test', () => {
  it('should getRandomInt correctly', () => {
    const result = getRandomInt(10);
    expect(result).toBeLessThan(10);
  });

  it('should getLinearInterpolatedValue correctly', () => {
    const result = getLinearInterpolatedValue(2, 4, 4, 8, 6);
    expect(result).toEqual(12);
  });

  it('should getFixedNumber correctly', () => {
    const result = getFixedNumber(26.45458, 2);
    expect(result).toEqual(26.45);
  });
});

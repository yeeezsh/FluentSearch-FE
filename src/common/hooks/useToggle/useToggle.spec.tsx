import { act, renderHook } from '@testing-library/react-hooks';
import useToggle from '.';

describe('Hooks/useToggle test', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('Should be perform without crash', () => {
    renderHook(() => useToggle());
  });

  it('should be perform toggle correctly', () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current[0]).toBe(false);

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toBe(true);
  });
});

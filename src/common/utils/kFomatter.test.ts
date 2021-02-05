import kFormatter from './kFormatter';

describe('kFormatter test', () => {
  it('should return what expected', () => {
    const resultTenThousand = kFormatter(100000);
    expect(resultTenThousand).toEqual('100.0k');
    const resultLessThousand = kFormatter(300);
    expect(resultLessThousand).toEqual('300');
  });
});

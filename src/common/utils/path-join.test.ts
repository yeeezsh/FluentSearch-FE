import pathJoin from './path-join';

describe('path join', () => {
  it('should return what expected', () => {
    const resultWithOne = pathJoin(['app']);
    expect(resultWithOne).toEqual('app/');

    const resultWithSlash = pathJoin(['app', 'test']);
    expect(resultWithSlash).toEqual('app/test');

    const resultWIthCommna = pathJoin(['app', 'test'], ',');
    expect(resultWIthCommna).toEqual('app,test');
  });
});

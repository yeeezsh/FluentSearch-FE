import { mount } from 'enzyme';
import React from 'react';
import BoundingBox from '.';
import { mock } from './constants';
import { Label, SquareStyle } from './styled';

describe('BoundingBox Components', () => {
  let wrap;
  beforeEach(() => {
    wrap = mount(<BoundingBox {...mock} />);
  });
  it('Should import correctly', () => {
    expect(wrap.exists()).toBe(true);
  });

  it('Should have BoxStyle and Label', () => {
    expect(wrap.find(SquareStyle).exists()).toBe(true);
    expect(wrap.find(Label).text()).toBe('label');
  });

  it('Should have properly props with mock data', () => {
    expect(wrap.prop('xMin')).toEqual(30);
    expect(wrap.prop('xMax')).toEqual(90);
    expect(wrap.prop('yMax')).toEqual(110);
    expect(wrap.prop('yMin')).toEqual(30);
    expect(wrap.prop('label')).toEqual('label');
    expect(wrap.prop('scaleBorder')).toEqual(2);
    expect(wrap.prop('currentImgWidth')).toEqual(300);
    expect(wrap.prop('currentImgHeight')).toEqual(300);
  });
});

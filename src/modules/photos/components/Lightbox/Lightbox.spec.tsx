import { mount } from 'enzyme';
import React from 'react';
import Lightbox from '.';
import BoundingBox from '../BoundingBox';
import { mock } from './constants';
import { LightboxCardLeft, LightboxCardRight, Image } from './styled';

describe('Lightbox Components', () => {
  let wrap;
  beforeEach(() => {
    wrap = mount(<Lightbox {...mock} />);
  });
  it('Should import correctly', () => {
    expect(wrap.exists()).toBe(true);
  });

  it('Should have Lightbox Card Left and Right', () => {
    expect(wrap.find(LightboxCardLeft).exists()).toBe(true);
    expect(wrap.find(LightboxCardRight).exists()).toBe(true);
  });

  it('Should have Image and BoundingBox', () => {
    expect(wrap.find(BoundingBox).exists()).toBe(true);
    expect(wrap.find(Image).exists()).toBe(true);
  });

  it('Should have properly props', () => {
    expect(wrap.prop('image')).not.toBeNull();
    expect(wrap.prop('onPrev')).not.toBeNull();
    expect(wrap.prop('onNext')).not.toBeNull();
    expect(wrap.prop('closeLightbox')).not.toBeNull();
  });
});

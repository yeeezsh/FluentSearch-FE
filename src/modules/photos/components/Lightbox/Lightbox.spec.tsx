import { MockedProvider } from '@apollo/client/testing';
import { mount } from 'enzyme';
import React from 'react';
import Lightbox from '.';
import { mock } from './constants';
import { LightboxCardLeft, LightboxCardRight, Image } from './styled';

const mocks = [];
describe('Lightbox Components', () => {
  let wrap;

  beforeEach(() => {
    wrap = mount(
      <MockedProvider mocks={mocks}>
        <Lightbox {...mock} />
      </MockedProvider>,
    );
  });
  it('Should import correctly', () => {
    expect(wrap.exists()).toBe(true);
  });

  it('Should have Lightbox Card Left and Right', () => {
    expect(wrap.find(LightboxCardLeft).exists()).toBe(true);
    expect(wrap.find(LightboxCardRight).exists()).toBe(true);
  });

  it('Should have Image', () => {
    expect(wrap.find(Image).exists()).toBe(true);
  });

  it('Should have Tag, Details, Date, Photo, Place on DetailCard', () => {
    console.log(wrap.debug());
    expect(wrap.find('b').at(0).text()).toEqual(' Info');
    expect(wrap.find('b').at(1).text()).toEqual(' Tag');
    expect(wrap.find('b').at(2).text()).toEqual(' Details');
    expect(wrap.find('b').at(3).text()).toEqual(' Model');
    expect(wrap.find('b').at(4).text()).toEqual(' Date');
    expect(wrap.find('b').at(5).text()).toEqual(' Photo');
  });

  it('Should have properly props', () => {
    expect(wrap.prop('image')).not.toBeNull();
    expect(wrap.prop('onPrev')).not.toBeNull();
    expect(wrap.prop('onNext')).not.toBeNull();
    expect(wrap.prop('closeLightbox')).not.toBeNull();
  });
});

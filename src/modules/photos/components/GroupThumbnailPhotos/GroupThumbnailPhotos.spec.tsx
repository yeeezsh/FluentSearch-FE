import { shallow } from 'enzyme';
import React from 'react';
import GroupThumbnailPhotos from '.';
import { mock } from './constants';
import Header from './Header';

describe('GroupThumbnailPhothos Components', () => {
  it('Should import correctly', () => {
    const wrap = shallow(<GroupThumbnailPhotos {...mock} />);
    const header = wrap.find(Header).exists();
    expect(header).toBe(header);
  });
});

import { shallow } from 'enzyme';
import { ThumbnailPhoto as ThumbnailPhotoType } from 'Modules/photos/models/thumbnail';
import React from 'react';
import ThumbnailPhoto from '.';
import SelectBadgeIcon from '../SelectBadgeIcon';

describe('ThumbnailPhoto', () => {
  const mockPhotoData: ThumbnailPhotoType = {
    src: '',
    selected: true,
    createAt: new Date(),
  };

  it('Should import correctly', () => {
    const wrap = shallow(<ThumbnailPhoto {...mockPhotoData} />);
    expect(wrap.find(SelectBadgeIcon).exists()).toBe(true);
  });
});

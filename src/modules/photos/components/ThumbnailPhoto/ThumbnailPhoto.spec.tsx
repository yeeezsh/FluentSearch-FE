import { mount, shallow } from 'enzyme';
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

  it('Should call onSelect props when clicking badge', () => {
    const onSelect = (s: boolean) => {
      expect(s).toBe(true);
    };
    const wrap = mount(
      <ThumbnailPhoto {...mockPhotoData} selected={false} onSelect={onSelect} />,
    );
    const target = wrap.find(SelectBadgeIcon);
    target.simulate('click');
  });
});

import { mount } from 'enzyme';
import React from 'react';
import SelectIcon, { HoverIcon, InnerHoverIcon, SelectedIcon } from './index';

describe('SelectIcon spec', () => {
  const onSelect = (s: boolean) => {
    return;
  };

  it('Should show nothing when hover and selected is false ', () => {
    const wrap = mount(<SelectIcon hover={false} selected={false} onSelect={onSelect} />);
    expect(wrap.find(SelectedIcon).exists()).toBe(false);
    expect(wrap.find(InnerHoverIcon).exists()).toBe(false);
    expect(wrap.find(HoverIcon).exists()).toBe(false);
  });

  it('Should show hover icon when hover is true selected is false ', () => {
    const wrap = mount(<SelectIcon hover={true} selected={false} onSelect={onSelect} />);
    expect(wrap.find(SelectedIcon).exists()).toBe(false);
    expect(wrap.find(InnerHoverIcon).exists()).toBe(false);
    expect(wrap.find(HoverIcon).exists()).toBe(true);
  });

  it('Should show selected icon whatever hover props is ', () => {
    let wrap = mount(<SelectIcon hover={true} selected={true} onSelect={onSelect} />);
    expect(wrap.find(SelectedIcon).exists()).toBe(true);
    expect(wrap.find(InnerHoverIcon).exists()).toBe(false);
    expect(wrap.find(HoverIcon).exists()).toBe(false);

    wrap = mount(<SelectIcon hover={false} selected={true} onSelect={onSelect} />);
    expect(wrap.find(SelectedIcon).exists()).toBe(true);
    expect(wrap.find(InnerHoverIcon).exists()).toBe(false);
    expect(wrap.find(HoverIcon).exists()).toBe(false);
  });
});

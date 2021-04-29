import { shallow } from 'enzyme';
import React from 'react';
import ToggleLabel from '.';

describe('Component/ToggleLabel test', () => {
  it('ToggleLabel children render test', () => {
    const ToggleLabelWithChild = shallow(<ToggleLabel>Label</ToggleLabel>);
    expect(ToggleLabelWithChild.text()).toEqual('Label');
  });

  it('ToggleLabel selected props test', () => {
    const ToggleLabelSelectedFalse = shallow(
      <ToggleLabel selected={false}>Label</ToggleLabel>,
    );
    expect(ToggleLabelSelectedFalse.prop('selected')).toBe(false);

    const ToggleLabelSelectedTrue = shallow(
      <ToggleLabel selected={true}>Label</ToggleLabel>,
    );
    expect(ToggleLabelSelectedTrue.prop('selected')).toBe(true);
  });
});

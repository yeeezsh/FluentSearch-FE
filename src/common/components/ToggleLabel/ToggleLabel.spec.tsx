import { shallow } from 'enzyme';
import React from 'react';
import ToggleLabel from '.';

describe('Component/ToggleLabel test', () => {
  const mockOnClick = jest.fn();
  it('ToggleLabel children render test', () => {
    const ToggleLabelWithChild = shallow(
      <ToggleLabel onClick={mockOnClick}>Label</ToggleLabel>,
    );
    expect(ToggleLabelWithChild.text()).toEqual('Label');
  });

  it('ToggleLabel selected props test', () => {
    const ToggleLabelSelectedFalse = shallow(
      <ToggleLabel onClick={mockOnClick} selected={false}>
        Label
      </ToggleLabel>,
    );
    expect(ToggleLabelSelectedFalse.prop('selected')).toBe(false);

    const ToggleLabelSelectedTrue = shallow(
      <ToggleLabel onClick={mockOnClick} selected>
        Label
      </ToggleLabel>,
    );
    expect(ToggleLabelSelectedTrue.prop('selected')).toBe(true);
  });
});

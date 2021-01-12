import { shallow } from 'enzyme';
import React from 'react';
import { BreakLineWithCaption } from 'Components/BreakLineWithCaption/index';
import { P } from 'Styles/global';

describe('Component/BreakLineWithCaption test', () => {
  it('Render correctly', () => {
    const wrap = shallow(<BreakLineWithCaption />);
    expect(wrap).toMatchSnapshot();
  });

  it('BreakLineWithCaption isString render test', () => {
    const wrapWithString = shallow(<BreakLineWithCaption> or </BreakLineWithCaption>);
    const wrapWithDiv = shallow(
      <BreakLineWithCaption>
        <div>or</div>
      </BreakLineWithCaption>,
    );

    expect(wrapWithString.exists(P)).toBe(true);
    expect(wrapWithString.exists('div')).toBe(false);
    expect(wrapWithDiv.exists('div')).toBe(true);
    expect(wrapWithDiv.exists(P)).toBe(false);
  });
});

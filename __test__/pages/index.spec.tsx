import HomeLayout from 'Components/Layouts/Home/HomeLayout';
import { mount, shallow } from 'enzyme';
import Home from 'Pages/index';
import React from 'react';

describe('Pages/Home test', () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  it('Render correcly', () => {
    const wrap = <Home />;
    expect(wrap).toMatchSnapshot();
  });

  it('Home should be exisiting', () => {
    const wrap = shallow(<Home />);
    expect(wrap.exists()).toBe(true);
  });

  it('Should contain Home Layout', () => {
    const wrap = mount(<Home />);
    expect(wrap.exists(HomeLayout)).toBe(true);
  });
});

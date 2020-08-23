import { shallow } from 'enzyme';
import React from 'react';
import AppRouter from 'Routers/App/AppRouter';
import App from './App';

describe('App', () => {
  it('render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(AppRouter)).toHaveLength(1);
  });
});

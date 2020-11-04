import { shallow } from 'enzyme';
import React from 'react';
import Button from './Button';

describe('Button Components', () => {
    it('Button should exisiting', () => {
        const wrapper = shallow(<Button/>)
        expect(wrapper.exists()).toBe(true)
    })
})
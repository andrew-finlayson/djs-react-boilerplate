import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../src/components/Home/Home';

// Enzyme Tests to Unit Test GUI Components
// Enzyme can inject Object Literals into a
// component to simulate store state

// Full Enzyme Documentation at
// https://github.com/airbnb/enzyme/tree/master/docs

describe('Component - Home', () => {

    let wrapper;

    beforeEach(() => {
        // add setup here
        wrapper = shallow(<Home />);
    })

    it('Does Component Render?', () => {
        expect(wrapper.length).toBe(1);
    })
})

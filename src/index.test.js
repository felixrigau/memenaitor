import React from 'react';
import Component from './index';
import { shallow } from 'enzyme';

describe('Example test', () => {
    it('Should render any component', () => {
        const wrapper = shallow(<Component />);
        expect(wrapper).toBeDefined();
    });
});

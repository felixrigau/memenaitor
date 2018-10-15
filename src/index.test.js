import React from 'react';
import Memenaitor from './index';
import { shallow } from 'enzyme';

describe('</Memenaitor>', () => {
    it('Should render the component correctly', () => {
        const wrapper = shallow(<Memenaitor />);
        expect(wrapper).toBeDefined();
    });
    it('Should render the component correctly', () => {
        const wrapper = shallow(<Memenaitor />);
        expect(wrapper).toMatchSnapshot();
    });
});

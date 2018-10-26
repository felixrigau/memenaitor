import React from 'react';
import { Memenaitor } from './memenaitor';
import { shallow } from 'enzyme';
import transfromJssClasses from './../../utils/transfromJssClasses';
import styles from './styles';

describe('</Memenaitor>', () => {
    it('Should render the component correctly', () => {
        const wrapper = shallow(<Memenaitor classes={transfromJssClasses(styles)} />);
        expect(wrapper).toBeDefined();
        expect(wrapper).toMatchSnapshot();
    });
});

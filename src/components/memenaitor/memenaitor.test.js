import React from 'react';
import { Memenaitor } from './memenaitor';
import { shallow } from 'enzyme';
import transformJssClasses from './../../utils/transformJssClasses';
import styles from './styles';

describe('</Memenaitor>', () => {
    it('Should render the component correctly', () => {
        const wrapper = shallow(<Memenaitor classes={transformJssClasses(styles)} />);
        expect(wrapper).toBeDefined();
        expect(wrapper).toMatchSnapshot();
    });
});

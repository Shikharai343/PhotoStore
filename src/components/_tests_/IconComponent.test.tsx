import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import toJson from 'enzyme-to-json';
import IconComponent, { IIconProps } from '../IconComponent';

jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon')
describe('Icon', () => {
    const props: IIconProps = {
        name: 'rocket',
        size: 24,
        color: 'white'
    };

    const wrapper: ShallowWrapper = shallow(
        <IconComponent {...props} />
    );

    it('should match snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    })
});
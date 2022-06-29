import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import toJson from 'enzyme-to-json';
import Detail from '../Detail';

jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon')
jest.mock('../../components/ImageComponent', () => 'ImageComponent')
jest.mock('@react-navigation/native', () => ({
    ...jest.requireActual('@react-navigation/native'),
    useRoute: () => ({
        params: {
            data: 'imageData',
        }
    }),
}));

describe('Detail Screen', () => {
    const wrapper: ShallowWrapper = shallow(
        <Detail />
    );

    it('should match snapshot with params', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    })
});
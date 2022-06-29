import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import toJson from 'enzyme-to-json';
import Home from '../Home';

const mockedNavigate = jest.fn();

jest.mock('../../components/ImageComponent', () => 'ImageComponent')
jest.mock('@react-navigation/native', () => {
    const actualNav = jest.requireActual('@react-navigation/native');
    return {
        ...actualNav,
        useNavigation: () => ({
            navigate: mockedNavigate,
        }),
    };
});

describe('Home Screen', () => {
    let useEffect: any;
    let wrapper: ShallowWrapper;
    const mockUseEffect = () => {
        useEffect.mockImplementationOnce(f => f());
    };

    beforeEach(() => {
        useEffect = jest.spyOn(React, "useEffect");
        mockUseEffect();

        wrapper = shallow(<Home />);
    })


    it('should match snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    })
});
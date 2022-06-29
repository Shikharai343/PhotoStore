import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import toJson from 'enzyme-to-json';
import Text, { FontType, ITextProps, TextType } from "../Text";

describe('Text', () => {
    const props: ITextProps = {
      children: 'Test',
      textType: 'label',
      fontType: 'small'
    };  

    const wrapper: ShallowWrapper<ITextProps, {}, Text> = shallow(
        <Text {...props} />
      );
    
      ['label' as TextType, 'title' as TextType].forEach((item: TextType) => {
        it(`should match snapshot for ${item}`, () => {
          wrapper.setProps({ ...props, textType: item });
          expect(toJson(wrapper)).toMatchSnapshot();
        });
      });
      ['small' as FontType, 'regular' as FontType].forEach((item: FontType) => {
        it(`should match snapshot for ${item}`, () => {
          wrapper.setProps({ ...props, fontType: item });
          expect(toJson(wrapper)).toMatchSnapshot();
        });
      });
  });
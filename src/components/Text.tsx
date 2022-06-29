import { Text as RNText, TextStyle } from 'react-native'
import React, { Children, FC, ReactElement } from 'react'

export type TextType = 'label' | 'title';
export type FontType = 'small' | 'regular';

const DEFAULT_FONT_FAMILY = 'Times New Roman'

const fontSize = {
    label: {
        small: 10,
        regular: 12,
    },
    title: {
        small: 16,
        regular: 18,
    },
};

export interface ITextProps {
    children: string | number;
    textType: TextType;
    fontType: FontType;
    color?: string;
    style?: TextStyle;
}

const Text: FC<ITextProps> = (props) => {
    // @ts-ignore
    const {textType, fontType, color, style, children} = props;

    const getTextStyles = (): TextStyle => {
        return {
            ...(style || {}),
            fontSize: fontSize[textType][fontType],
            fontFamily: DEFAULT_FONT_FAMILY,
            color
        }
    }
    return (
        <RNText style={getTextStyles()}>{children}</RNText>
    )
}

export default Text
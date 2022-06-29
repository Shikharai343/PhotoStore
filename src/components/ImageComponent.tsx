import React, { FC } from 'react'
import { View, Image, ImageStyle, ViewStyle } from 'react-native'

export interface IImageProps {
    uri: string;
    imageStyle: ImageStyle;
    containerStyle: ViewStyle;
}
const DEFAULT_IMAGE = require('../assets/images/loading.jpg');

const ImageComponent: FC<IImageProps> = (props) => {
    const { uri, imageStyle, containerStyle } = props;

    return (
        <View style={containerStyle}>
            <Image resizeMode="contain" source={{ uri }} style={imageStyle} defaultSource={DEFAULT_IMAGE} />
        </View>
    )
}

export default ImageComponent;
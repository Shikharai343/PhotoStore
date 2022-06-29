import React, { FC, useState } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { DateUtil } from '../utils/DateUtil';
import IconComponent from '../components/IconComponent';
import ImageComponent from '../components/ImageComponent';
import Text from '../components/Text';
import { IParams } from '../navigation/interfaces';

const Detail: FC = () => {
    const { params } = useRoute();
    const [isFavourite, setIsFavourite] = useState(false)
    const param = params as IParams;

    if (!param || !param?.data) return <View />

    const onFavourite = () => {
        setIsFavourite(!isFavourite)
    }

    const { created_utc, url, title, author, total_awards_received } = param.data;
    const timestemp = DateUtil.timeDifference(created_utc);

    return (
        <View style={[styles.flexOne, styles.container]}>
            <View style={styles.content}>
                <View style={[styles.rowContainer, styles.details]}>
                    <Text
                        textType='label'
                        fontType='small'
                        color='#5B5E66'
                        style={styles.author}>
                        {`Posted by ${author} ${timestemp}`}
                    </Text>
                    <View style={styles.rowContainer}>
                        <IconComponent
                            name={"trophy"}
                            size={15}
                            color={'orange'}
                        />
                        <Text
                            textType='label'
                            fontType='small'
                            style={styles.award}>
                            {total_awards_received}
                        </Text>
                    </View>
                </View>
                <Text
                    textType='title'
                    fontType='small'
                    color='#43474E'
                    style={styles.title}>
                    {title}
                </Text>
            </View>
            <ImageComponent uri={url} imageStyle={styles.flexOne} containerStyle={styles.flexOne} />
            <TouchableOpacity activeOpacity={0.5} onPress={onFavourite} style={styles.favContainer}>
                <IconComponent name={"heart"} size={25} color={isFavourite ? 'red' : 'black'} />
            </TouchableOpacity>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    flexOne: {
        flex: 1,
    },
    container: {
        backgroundColor: 'white',
    },
    content: {
        padding: 16,
    },
    details: {
        marginVertical: 4,
    },
    author: {
        flex: 1,
        marginRight: 6,
    },
    award: {
        marginHorizontal: 4,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    title: {
        marginTop: 6
    },
    favContainer: {
        position: 'absolute',
        bottom: 50,
        ight: 50,
        alignSelf: 'flex-end',
        borderRadius: 25,
        padding: 10,
        backgroundColor: 'white',
    }

})
import React, { FC, useCallback, useEffect, useState } from 'react'
import { View, FlatList, TouchableOpacity, StyleSheet, TextInput, Button, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AppRepository } from '../network/repositories/AppRepository'
import { DateUtil } from '../utils/DateUtil'
import ImageComponent from '../components/ImageComponent'
import { IImageData, IImageResponse } from '../network/repositories/interfaces'
import Text from '../components/Text'

const Home: FC = () => {
    const navigation = useNavigation();
    const [picsData, setPicsData] = useState([]);
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        getPicData().then();
    }, [])

    const getPicData = async () => {
        try {
            const response = await (await AppRepository.getPics()).json();
            if (response.data) {
                setPicsData(response.data.children)
            }
        } catch (e) {
            Alert.alert('Error while fetching data', JSON.stringify(e))
        }
    }

    const onClear = () => {
        setSearchValue('')
        getPicData();
    }

    const onPressItem = (item: IImageResponse) => {
        // @ts-ignore
        navigation.navigate({ name: 'Detail', params: { data: item } })
    }

    const onSearch = useCallback(() => {
        const previousData = [...picsData];
        const updatedData = previousData.filter((item: IImageData) => item.data.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
        setPicsData(updatedData)
    }, [searchValue])

    const renderKeyExtractor = (item: IImageData) => `${item.data.id}`;

    const renderItem = ({ item }: { item: IImageData }) => {
        const itemData = item.data;
        const timestemp = DateUtil.timeDifference(itemData.created_utc);

        const imageStyle = {
            height: itemData.thumbnail_height,
            width: itemData.thumbnail_width,

        }
        return (
            <TouchableOpacity style={styles.itemContainer} onPress={() => onPressItem(itemData)}>
                <ImageComponent
                    uri={itemData.thumbnail}
                    imageStyle={imageStyle}
                    containerStyle={styles.imageContainer}
                />
                <Text
                    textType='label'
                    fontType='small'
                    color='#737170'
                >
                    {`Posted on: ${timestemp}`}
                </Text>
                <Text
                    textType='label'
                    fontType='regular'
                    color='#2b2724'
                    style={styles.title}
                >
                    {itemData.title}
                </Text>
            </TouchableOpacity>
        )
    }

    const renderEmptyComponent = () => {
        return (
            <View style={styles.emptyView}>
                <Text textType='title' fontType='regular'>Loading</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    value={searchValue}
                    placeholder='Filter by title'
                    placeholderTextColor="#717275"
                    onChangeText={setSearchValue}
                    style={styles.input}
                />
                <View style={{ padding: 0, marginRight: 6 }}>
                    <Button title='Search' onPress={onSearch} />
                </View>
                <View style={{ padding: 0 }}>
                    <Button title='Clear' onPress={onClear} />
                </View>
            </View>
            <FlatList
                data={picsData}
                numColumns={2}
                ListEmptyComponent={renderEmptyComponent}
                renderItem={renderItem}
                keyExtractor={renderKeyExtractor}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'white',
    },
    itemContainer: {
        padding: 10,
        flex: 1
    },
    imageContainer: {
        marginBottom: 4,
        borderWidth: 6,
        padding: 10,
        borderRadius: 4,
        borderColor: '#41464f',
        alignItems: 'center',
    },
    title: {
        marginVertical: 4
    },
    searchContainer: {
        flexDirection: 'row',
    },
    input: {
        borderWidth: 0.5,
        borderColor: '#797a7a',
        padding: 10,
        flex: 1,
        marginBottom: 20,
        borderRadius: 6,
        marginHorizontal: 16,
        color: 'black'
    },
    emptyView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
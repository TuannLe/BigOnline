import {
    SafeAreaView,
    Dimensions,
    FlatList,
    ActivityIndicator
} from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import ItemProduct from './ItemProduct';

export default function Carousel_product({ item }: any) {
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        if (item) {
            setIsloading(true);
        }
    }, []);

    return (
        <SafeAreaView style={tw`w-full`}>
            {isLoading ?
                <FlatList
                    data={item}
                    renderItem={({ item }) => <ItemProduct item={item} />}
                    keyExtractor={item => item.product_id}
                    horizontal
                /> : <ActivityIndicator />
            }
        </SafeAreaView>
    )
}
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header'
import { COLOR, ROUTER } from '../constants';
import {
    getProductAll,
    getCategories,
    getTopicsProduct,
} from '../../core/api/productAPI'
import Carousel_product from '../components/Carousel_product';

const image_banner = [
    'https://res.cloudinary.com/dwd5gmp97/image/upload/v1678780767/buonxaz1xpy1udyn6gsy.jpg',
    'https://res.cloudinary.com/dwd5gmp97/image/upload/v1678780806/jniwjxytr2yif72cu4mw.jpg',
    'https://res.cloudinary.com/dwd5gmp97/image/upload/v1681177966/cjidvddsja3pw6xpiddr.jpg',
    'https://res.cloudinary.com/dwd5gmp97/image/upload/v1678780851/yvdrnoav7353rv23jcqy.jpg',
    'https://res.cloudinary.com/dwd5gmp97/image/upload/v1678780868/vdnklaytsnex2jpam3df.jpg'
]

export default function HomeScreen() {
    const navigation = useNavigation();
    const WIDTH = Dimensions.get('window').width;
    const [superSaleItems, setSuperSaleItems] = useState([])
    const [saleItems20, setSaleItems20] = useState([])
    const [saleItems15, setSaleItems15] = useState([])
    const [arrPopular, setArrPopular] = useState([])
    const [arrBestSelling, setArrBestSelling] = useState({})
    const [arrBestWeek, setArrBestWeek] = useState({})
    const [arrCategory, setArrCategory] = useState([])

    const handleGetProducts = async () => {
        const response = await getTopicsProduct()
        if (response.status === 'success') {
            setSuperSaleItems(response.data[0])
            setSaleItems20(response.data[1])
            setSaleItems15(response.data[2])
            setArrPopular(response.data[3])
            setArrBestSelling(response.data[4])
            setArrBestWeek(response.data[5])
        }
    }

    const handleGetCategories = async () => {
        const response = await getCategories()
        if (response.status === 'success') {
            setArrCategory(response.data)
        }
    }

    useEffect(() => {
        handleGetProducts()
        handleGetCategories()
    }, [])

    return (
        <>
            <Header />
            <ScrollView>
                {/* <Slider item={image_banner} /> */}
                <View style={tw`px-1`}>
                    <View style={tw`flex flex-row justify-between items-center px-1 my-2`}>
                        <Text numberOfLines={1} style={tw`w-[${WIDTH - 95}px] text-black text-2xl font-semibold`}>
                            {superSaleItems?.title}
                        </Text>
                        <TouchableOpacity
                            // onPress={() => handleGetProductAll(superSaleItems?.id)}
                            style={tw`px-2 py-0.5 bg-[${COLOR.COLOR_BORDER}] rounded-lg`}
                        >
                            <Text style={tw`text-base text-[${COLOR.WHITE}]`}>View all</Text>
                        </TouchableOpacity>
                    </View>
                    {superSaleItems?.products?.length ? (
                        <Carousel_product item={superSaleItems.products} />
                    ) : (
                        <></>
                    )}
                </View>
                {
                    arrCategory.length ? (
                        <View style={tw`w-full flex-row flex-wrap mt-2 p-3 bg-white`}>
                            {arrCategory.map((category, index) => {
                                return (
                                    <View style={tw`w-1/3 p-2`}>
                                        <TouchableOpacity
                                            // onPress={() => handleGetProductByCategory(category.category_id, category.category_name)}
                                            style={tw`flex-1 items-center`}
                                        >
                                            <Image
                                                source={{ uri: category.category_image }}
                                                style={tw`w-23 h-23`}
                                                resizeMode={'contain'}
                                            />
                                            <Text style={tw`text-center text-black font-bold`}>{category.category_name}</Text>
                                        </TouchableOpacity>
                                    </View>
                                );
                            })
                            }
                        </View>
                    ) : (
                        // <SkeletonCategories />
                        <></>
                    )
                }
                <Image
                    source={{ uri: 'https://res.cloudinary.com/dwd5gmp97/image/upload/v1678780917/emwqpmbve5rhw7revnt2.jpg' }}
                    style={tw`w-full h-35`}
                    resizeMode='stretch'
                />
                <View style={tw`px-1`}>
                    <View style={tw`flex flex-row items-center justify-between px-1 my-2`}>
                        <Text style={tw`text-black text-2xl font-semibold`}>
                            {saleItems20?.title}
                        </Text>
                        <TouchableOpacity
                            // onPress={() => handleGetProductAll(saleItems20?.id)}
                            style={tw`px-2 py-0.5 bg-[${COLOR.COLOR_BORDER}] rounded-lg`}
                        >
                            <Text style={tw`text-base text-[${COLOR.WHITE}]`}>View all</Text>
                        </TouchableOpacity>
                    </View>
                    {saleItems20?.products?.length ? (
                        <Carousel_product item={saleItems20.products} />
                    ) : (
                        <></>
                    )}
                </View>
                <View style={tw`px-1`}>
                    <View style={tw`flex flex-row justify-between items-center px-1 my-2`}>
                        <Text style={tw`text-black text-2xl font-semibold`}>
                            {saleItems15?.title}
                        </Text>
                        <TouchableOpacity
                            // onPress={() => handleGetProductAll(saleItems15?.id)}
                            style={tw`px-2 py-0.5 bg-[${COLOR.COLOR_BORDER}] rounded-lg`}
                        >
                            <Text style={tw`text-base text-[${COLOR.WHITE}]`}>View all</Text>
                        </TouchableOpacity>
                    </View>
                    {saleItems15?.products?.length ? (
                        <Carousel_product item={saleItems15.products} />
                    ) : (
                        <></>
                    )}
                </View>
                <Image
                    source={{ uri: 'https://res.cloudinary.com/dwd5gmp97/image/upload/v1678780935/t1mjo4hndhi3pixpt7da.jpg' }}
                    style={tw`w-full h-35 mt-2`}
                    resizeMode='stretch'
                />
                <View style={tw`px-1`}>
                    <View style={tw`flex flex-row items-center justify-between px-1 my-2`}>
                        <Text style={tw`text-black text-2xl font-semibold`}>
                            {arrPopular?.title}
                        </Text>
                        <TouchableOpacity
                            // onPress={() => handleGetProductAll(arrPopular?.id)}
                            style={tw`px-2 py-0.5 bg-[${COLOR.COLOR_BORDER}] rounded-lg`}
                        >
                            <Text style={tw`text-base text-[${COLOR.WHITE}]`}>View all</Text>
                        </TouchableOpacity>
                    </View>
                    {arrPopular?.products?.length ? (
                        <Carousel_product item={arrPopular.products} />
                    ) : (
                        <></>
                    )}
                </View>
                <View style={tw`px-1`}>
                    <View style={tw`flex flex-row justify-between items-center px-1 my-2`}>
                        <Text style={tw`text-black text-2xl font-semibold`}>
                            {arrBestSelling?.title}
                        </Text>
                        <TouchableOpacity
                            // onPress={() => handleGetProductAll(arrBestSelling?.id)}
                            style={tw`px-2 py-0.5 bg-[${COLOR.COLOR_BORDER}] rounded-lg`}
                        >
                            <Text style={tw`text-base text-[${COLOR.WHITE}]`}>View all</Text>
                        </TouchableOpacity>
                    </View>
                    {arrBestSelling?.products?.length ? (
                        <Carousel_product item={arrBestSelling.products} />
                    ) : (
                        <></>
                    )}
                </View>
                <Image
                    source={{ uri: 'https://res.cloudinary.com/dwd5gmp97/image/upload/v1681178090/euiilbjeej8t9x0jv0xy.jpg' }}
                    style={tw`w-full h-35 mt-2`}
                    resizeMode='stretch'
                />
                <View style={tw`px-1`}>
                    <View style={tw`flex flex-row items-center justify-between px-1 my-2`}>
                        <Text style={tw`text-black text-2xl font-semibold`}>
                            {arrBestWeek?.title}
                        </Text>
                        <TouchableOpacity
                            onPress={() => handleGetProductAll(arrBestWeek?.id)}
                            style={tw`px-2 py-0.5 bg-[${COLOR.COLOR_BORDER}] rounded-lg`}
                        >
                            <Text style={tw`text-base text-[${COLOR.WHITE}]`}>View all</Text>
                        </TouchableOpacity>
                    </View>
                    {arrBestWeek?.products?.length ? (
                        <Carousel_product item={arrBestWeek.products} />
                    ) : (
                        <></>
                    )}
                </View>
            </ScrollView>
        </>
    );
}

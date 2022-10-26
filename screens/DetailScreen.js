import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

import { styled } from 'nativewind';
import { ArrowLeftIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow';

import { products } from '../data/product_data';

const StyledImage = styled(Image);
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);


const DetailScreen = () => {

    const navigation = useNavigation();

    const {
        params: {
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat
        },
    } = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    useEffect(() => {
        if (id === undefined) {
            navigation.navigate("Home")
        }
    }, []);

    return (

        <ScrollView>
            <StyledView>
                <StyledImage
                    source={{
                        uri: imgUrl
                    }}
                    className='w-full h-56 bg-gray-300 p-4'
                />
                <StyledTouchableOpacity
                    onPress={navigation.goBack}
                    className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full'>
                    <ArrowLeftIcon size={25} color="#00CCBB" />
                </StyledTouchableOpacity>
            </StyledView>

            <StyledView className='bg-white'>
                <StyledView className='px-4 pt-4'>
                    <StyledText className='text-3xl font-bold'>{title}</StyledText>
                    <StyledView className='flex-row my-1 space-x-2'>
                        <StyledView className='flex-row items-center space-x-1'>
                            <StarIcon color='green' opacity={0.5} size={22} />
                            <StyledText className='text-xs text-gray-500'>
                                <StyledText className='text-green-500'>{rating}</StyledText> . {genre}
                            </StyledText>
                        </StyledView>

                        <StyledView className='flex-row items-center space-x-1'>
                            <MapPinIcon color='green' opacity={0.5} size={22} />
                            <StyledText className='text-xs text-gray-500'>
                                Near. {address}
                            </StyledText>
                        </StyledView>
                    </StyledView>

                    <StyledText className='text-gray-500 mt-2 pb-4'> {short_description} </StyledText>
                </StyledView>

                <StyledTouchableOpacity className='flex-row items-center  space-x-2 p-5 border-y border-gray-300'>
                    <QuestionMarkCircleIcon color="gray" size={25} opacity={0.5} />
                    <StyledText className='pl-2 flex-1  font-bold'>
                        Have a food allergy?
                    </StyledText>
                </StyledTouchableOpacity>
            </StyledView>
            <StyledView>
                <StyledText className='px-4 pt-6 mb-3 font-bold text-xl'>Menu</StyledText>

                {products && products.map((prd) => (
                    <DishRow product={prd} />
                ))}

            </StyledView>
        </ScrollView>

    )
}

export default DetailScreen
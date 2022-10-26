import React, { useEffect, useLayoutEffect, useState } from 'react';
import { SafeAreaView, Text, View, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styled } from "nativewind";
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";

import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);


    const StyledSafeAreaView = styled(SafeAreaView);
    const StyledView = styled(View);
    const StyledText = styled(Text);
    const StyledImage = styled(Image);
    const StyledScrollView = styled(ScrollView);

    return (
        <StyledSafeAreaView className='bg-white pt-10 '>
            {/* Header */}
            < StyledView className='flex-row pb-3 items-center mx-4 space-x-2'>
                <StyledImage
                    source={{
                        uri: "https://links.papareact.com/wru"
                    }}
                    className="h-7 w-7 bg-gray-300 p-5 rounded-full"
                />

                <StyledView className='flex-1' >
                    <StyledText className='font-bold text-gray-400 text-xs'>
                        Delilver Now!
                    </StyledText>
                    <StyledText className='font-bold text-xl'>
                        Current Location
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </StyledText>
                </StyledView>
                <UserIcon size={35} color="#00CCBB" />
            </ StyledView>

            {/* Search */}
            <StyledView className='flex-row items-center space-x-2 pb-2 mx-4 px-2' >
                <StyledView className='flex-row flex-1 space-x-2 bg-gray-200 p-3' >
                    <MagnifyingGlassIcon color="gray" size={25} />
                    <TextInput
                        placeholder='you looking for today'
                        keyboardType='default'
                    />
                </StyledView>
                <AdjustmentsVerticalIcon color="#00CCBB" />
            </StyledView>

            {/* Body */}
            <StyledScrollView
                className='bg-gray-100'
                contentContainerStyle={{
                    paddingBottom: 100,
                }}
            >
                {/* Categories */}
                <Categories />

                {/* Featured Rows */}
                <FeaturedRow
                    id="123"
                    title="Featured"
                    description="Paid placements from our partners"
                />

                {/* Tasty Discounts */}
                <FeaturedRow
                    id="1234"
                    title="Tasty Discountsatured"
                    description="Paid placements from our partners"
                />

                {/* Offers near you */}
                <FeaturedRow
                    id="12345"
                    title="Offers near you"
                    description="Paid placements from our partners"
                />


            </StyledScrollView>
        </StyledSafeAreaView>
    );

};

export default HomeScreen;